const factory = require('./handleFactory');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const filter = (obj, ...allowedFields) => {
    const newObj = {};
    // Adding only allowed fields
    Object.keys(obj).forEach((cur) => {
        if (allowedFields.includes(cur)) newObj[cur] = obj[cur];
    });
    return newObj;
};
exports.createNewUser = (req, res, next) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not defined! Please use /signup',
    });
};

// User Route Handlers
exports.getAllUsers = factory.getAll(User);
exports.getUserById = factory.getOne(User);
exports.updateUserById = factory.updateOne(User);
exports.deleteUserById = factory.deleteOne(User);

// Update Me
exports.updateMe = catchAsync(async (req, res, next) => {
    // 1) Create error is user post password
    if (req.body.password || req.body.passwordConfirm)
        return next(
            new AppError(
                'This route is not for password updates. Please use /updateMyPassword',
                400
            )
        );
    // 2) Filter unwanted field names that are not allowed to be updated
    const filterBody = filter(req.body, 'name', 'email', 'bio');
    // 3) Update user document
    // findByIdAndUpdate can now be used
    const updatedUser = await User.findByIdAndUpdate(req.user.id, filterBody, {
        new: true,
        runValidators: true,
    });
    // Send Response
    res.status(200).json({
        status: 'success',
        data: { user: updatedUser },
    });
});

// Deactivate Me
exports.deleteMe = catchAsync(async (req, res, next) => {
    // Get user and Update Active properties
    await User.findByIdAndUpdate(req.user.id, { active: false });
    // Send Response
    res.status(204).json({
        status: 'success',
        data: null,
    });
});
