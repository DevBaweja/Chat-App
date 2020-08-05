const factory = require('./handleFactory');
const User = require('../models/userModel');

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
