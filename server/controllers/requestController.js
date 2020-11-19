const factory = require('./handleFactory');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Request = require('../models/requestModel');

// Alias

exports.getAllSentRequest = catchAsync(async (req, res, next) => {
    req.query = { ...req.query, from: req.user.id };
    next();
});

exports.getAllReceiveRequest = catchAsync(async (req, res, next) => {
    req.query = { ...req.query, to: req.user.id };
    next();
});

exports.createSentRequest = catchAsync(async (req, res, next) => {
    req.body = { ...req.body, from: req.user.id, to: req.params.id };
    next();
});

exports.updateReceiveRequest = catchAsync(async (req, res, next) => {
    // Update Request
    const updatedRequest = await Request.findOneAndUpdate(
        { from: req.params.id, to: req.user.id },
        req.body,
        {
            new: true,
            runValidators: true,
        }
    );
    if (!updatedRequest) {
        return next(new AppError('No document found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            data: updatedRequest,
        },
    });
});

exports.deleteSentRequest = catchAsync(async (req, res, next) => {
    // Delete Request
    const deletedRequest = await Request.findOneAndDelete({
        from: req.user.id,
        to: req.params.id,
    });
    if (!deletedRequest) {
        return next(new AppError('No document found with that ID', 404));
    }
    // Send Response
    res.status(204).json({
        status: 'success',
        data: null,
    });
});

// exports.getSentRequest = catchAsync(async (req, res, next) => {
//     // Create Setting
//     const setting = await Setting.create({ user: req.user.id, ...req.body });

//     // Send Response
//     res.status(201).json({
//         status: 'success',
//         data: {
//             setting,
//         },
//     });
// });

// exports.getReceive = catchAsync(async (req, res, next) => {
//     // Update Setting
//     const updatedSetting = await Setting.findOneAndUpdate(
//         { user: req.user.id },
//         req.body,
//         {
//             new: true,
//             runValidators: true,
//         }
//     );
//     if (!updatedSetting) {
//         return next(new AppError('No document found with that ID', 404));
//     }
//     res.status(200).json({
//         status: 'success',
//         data: {
//             setting: updatedSetting,
//         },
//     });
// });
// exports.deleteMySetting = catchAsync(async (req, res, next) => {
//     // Delete Setting
//     const deletedSetting = await Setting.findOneAndDelete({
//         user: req.user.id,
//     });

//     if (!deletedSetting) {
//         return next(new AppError('No document found with that ID', 404));
//     }

//     res.status(204).json({
//         status: 'success',
//         data: null,
//     });
// });

// Request Route Handlers
exports.getAllRequests = factory.getAll(Request);
exports.getRequestById = factory.getOne(Request);
exports.createNewRequest = factory.createOne(Request);
exports.updateRequestById = factory.updateOne(Request);
exports.deleteRequestById = factory.deleteOne(Request);
