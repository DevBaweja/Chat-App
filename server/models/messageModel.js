const mongoose = require('mongoose');

const { Schema } = mongoose;

const getMustHave = (str) => `A message must have ${str}`;

// -------
// Schema
const def = {
    type: {
        type: String,
        enum: ['text', 'image', 'audio', 'video'],
        default: 'text',
        required: { value: true, message: getMustHave('a type.') },
    },
    content: {
        type: String,
        trim: true,
        required: { value: true, message: getMustHave('a content.') },
    },
    to: {},
    from: {},
    sendAt: {
        type: Date,
        default: Date.now(),
    },
    receivedAt: {
        type: Date,
    },
    deliveredAt: {
        type: Date,
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
};
const options = {};

const messageSchema = Schema(def, options);

// --------
// Middlewares

// ---------
// Model
const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
