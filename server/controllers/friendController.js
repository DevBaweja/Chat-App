const factory = require('./handleFactory');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Friend = require('../models/friendModel');

// Alias
exports.getAllMyFriends = (req, res, next) => {
    req.query = {
        ...req.query,
        $or: [{ from: req.user.id }, { to: req.user.id }],
    };
    next();
};

exports.createMyFriend = (req, res, next) => {
    req.body = { ...req.body, from: req.user.id, to: req.params.id };
    next();
};

exports.updateMyFriend = catchAsync(async (req, res, next) => {
    // Update Friend
    const updatedFriend = await Friend.findOneAndUpdate(
        {
            $or: [
                { from: req.user.id, to: req.params.id },
                { to: req.user.id, from: req.params.id },
            ],
        },
        req.body,
        {
            new: true,
            runValidators: true,
        }
    );
    if (!updatedFriend) {
        return next(new AppError('No document found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            data: updatedFriend,
        },
    });
});

// Friend Route Handlers
exports.getAllFriends = factory.getAll(Friend);
exports.getFriendById = factory.getOne(Friend);
exports.createNewFriend = factory.createOne(Friend);
exports.updateFriendById = factory.updateOne(Friend);
exports.deleteFriendById = factory.deleteOne(Friend);
