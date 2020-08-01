const factory = require('./handleFactory');
const Message = require('../models/messageModel');

// User Route Handlers
exports.getAllMessages = factory.getAll(Message);
exports.getMessageById = factory.getOne(Message);
exports.createNewMessage = factory.createOne(Message);
exports.updateMessageById = factory.updateOne(Message);
exports.deleteMessageById = factory.deleteOne(Message);
