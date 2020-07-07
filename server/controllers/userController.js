const factory = require('./handleFactory');
const User = require('../models/userModel');

// User Route Handlers
exports.getAllUsers = factory.getAll(User);
exports.createNewUser = factory.createOne(User);
