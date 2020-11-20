const factory = require('./handleFactory');
// const AppError = require('../utils/appError');
// const catchAsync = require('../utils/catchAsync');
const Friend = require('../models/friendModel');

// Friend Route Handlers
exports.getAllFriends = factory.getAll(Friend);
exports.getFriendById = factory.getOne(Friend);
exports.createNewFriend = factory.createOne(Friend);
exports.updateFriendById = factory.updateOne(Friend);
exports.deleteFriendById = factory.deleteOne(Friend);
