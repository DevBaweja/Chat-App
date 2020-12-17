const factory = require('./handleFactory');
const Message = require('../models/messageModel');

// Alias
exports.getAllMyMessages = (req, res, next) => {
    req.query = {
        ...req.query,
        $or: [
            { from: req.user.id, to: req.params.id },
            { to: req.user.id, from: req.params.id },
        ],
    };
    next();
};

exports.createMyMessage = (req, res, next) => {
    req.body = { ...req.body, from: req.user.id, to: req.params.id };
    next();
};

// Message Route Handlers
exports.getAllMessages = factory.getAll(Message);
exports.getMessageById = factory.getOne(Message);
exports.createNewMessage = factory.createOne(Message);
exports.updateMessageById = factory.updateOne(Message);
exports.deleteMessageById = factory.deleteOne(Message);
