const factory = require('./handleFactory');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Setting = require('../models/settingModel');

// Alias
exports.getMySetting = catchAsync(async (req, res, next) => {
    const setting = await Setting.findOne({ user: req.user.id });

    if (!setting) {
        return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            setting,
        },
    });
});
exports.createMySetting = catchAsync(async (req, res, next) => {
    // Create Setting
    const setting = await Setting.create({ user: req.user.id, ...req.body });

    // Send Response
    res.status(201).json({
        status: 'success',
        data: {
            setting,
        },
    });
});
exports.updateMySetting = catchAsync(async (req, res, next) => {
    // Update Setting
    const updatedSetting = await Setting.findOneAndUpdate(
        { user: req.user.id },
        req.body,
        {
            new: true,
            runValidators: true,
        }
    );
    if (!updatedSetting) {
        return next(new AppError('No document found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            setting: updatedSetting,
        },
    });
});
exports.deleteMySetting = catchAsync(async (req, res, next) => {
    // Delete Setting
    const deletedSetting = await Setting.findOneAndDelete({
        user: req.user.id,
    });

    if (!deletedSetting) {
        return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({
        status: 'success',
        data: null,
    });
});

// Setting Route Handlers
exports.getAllSettings = factory.getAll(Setting);
exports.getSettingById = factory.getOne(Setting);
exports.createNewSetting = factory.createOne(Setting);
exports.updateSettingById = factory.updateOne(Setting);
exports.deleteSettingById = factory.deleteOne(Setting);
