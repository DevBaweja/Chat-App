const multer = require('multer');
const sharp = require('sharp');
const factory = require('./handleFactory');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

/*
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../client/dist/img/users');
    },
    filename: (req, file, cb) => {
        // user-userId-currentTimeStamp.extension
        const [, ext] = file.mimetype.split('/');
        cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
    },
});
*/
const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
    const [type] = file.mimetype.split('/');
    if (type.includes('image')) cb(null, true);
    else cb(new AppError('Please upload only images!', 400), false);
};
// Uploading image using multer
const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
});

exports.search = (req, res, next) => {
    // Getting name from params
    const { name } = req.params;
    // Constructing RegExp
    req.query = { ...req.query, name: { $regex: `^${name}`, $options: 'i' } };
    /*
    req.query = {
        $where: function () {
            return this.name.startsWith(name);
        },
    };
    */
    next();
};

exports.uploadUserPhoto = upload.single('photo');

exports.resizeUserPhoto = (req, res, next) => {
    // If Photo is not uploaded
    if (!req.file) return next();

    req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;
    // As multer we use multerStorage as memoryStorage
    sharp(req.file.buffer)
        .resize(500, 500)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`../client/dist/img/users/${req.file.filename}`);

    next();
};

// Filter Object for security
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
    const filterBody = filter(req.body, 'name', 'email', 'bio', 'photo');
    // Photo
    if (req.file) filterBody.photo = `img/users/${req.file.filename}`;

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

// Get Relation
exports.getRelation = catchAsync(async (req, res, next) => {
    // Getting user relation
    const other = await User.findById(req.params.id);
    if (!other) {
        return next(new AppError('No relation found with that ID', 404));
    }
    // Establishing Relation
    const relation = 'stranger';

    res.status(200).json({
        status: 'success',
        relation,
        data: {
            other,
        },
    });
});
