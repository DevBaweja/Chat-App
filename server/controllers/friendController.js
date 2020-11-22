const factory = require('./handleFactory');
// const AppError = require('../utils/appError');
// const catchAsync = require('../utils/catchAsync');
const Friend = require('../models/friendModel');

// Alias
exports.getAllMyFriends = (req, res, next) => {
    req.query = {
        ...req.query,
        $or: [{ from: req.user.id }, { to: req.user.id }],
    };
    next();
};

// Friend Route Handlers
exports.getAllFriends = factory.getAll(Friend);
exports.getFriendById = factory.getOne(Friend);
exports.createNewFriend = factory.createOne(Friend);
exports.updateFriendById = factory.updateOne(Friend);
exports.deleteFriendById = factory.deleteOne(Friend);
