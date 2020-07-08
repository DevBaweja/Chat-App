const factory = require('./handleFactory');
const User = require('../models/userModel');

// User Route Handlers
exports.getAllUsers = factory.getAll(User);
exports.getUserById = factory.getOne(User);
exports.createNewUser = factory.createOne(User);
exports.updateUserById = factory.updateOne(User);
exports.deleteUserById = factory.deleteOne(User);
