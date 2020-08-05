const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};
const createSendToken = (user, statusCode, req, res) => {
    const token = signToken(user._id);

    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
    };

    res.cookie('jwt', token, cookieOptions);

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user,
        },
    });
};

// Sign up
exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create(req.body);

    // Delete password
    newUser.password = undefined;

    // Send json web token
    createSendToken(newUser, 201, req, res);
});

// Log In
exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    // Check if user and password exist
    if (!email || !password)
        return next(new AppError('Please provide email and password!', 400));

    // Check if there is user
    const user = await User.findOne({ email }).select('+password');

    if (!user)
        return next(
            new AppError('There is no user with given credentials'),
            401
        );

    // Check if credentials are correct
    const correct = await user.correctPassword(password, user.password);

    if (!correct) return next(new AppError('Incorrect email or password'), 401);

    // Delete password
    user.password = undefined;

    // Send json web token
    createSendToken(user, 201, req, res);
});

// Protect
exports.protect = catchAsync(async (req, res, next) => {
    let token;
    // Getting token from headers or cookies
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }
    // Production
    /*
    if (req.cookies.jwt) {
        token = req.cookies.jwt;
    }
    */

    if (!token)
        return next(
            new AppError(
                'You are not logged in! Please log in to get access.',
                401
            )
        );
    // Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // Check if user still exists
    const user = await User.findById(decoded.id);
    if (!user)
        return next(
            new AppError(
                'The user belonging to this token does no longer exist.',
                401
            )
        );
    // Check if user changed password after token was issued
    if (user.changedPasswordAfter(decoded.iat))
        return next(
            new AppError(
                'User recently changed password! Please log in again.',
                401
            )
        );

    req.user = user;
    // Grant access to protected route
    next();
});

// Restrict To
exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(
                new AppError(
                    'You do not have permission to perform this action.',
                    403
                )
            );
        }
        next();
    };
};
