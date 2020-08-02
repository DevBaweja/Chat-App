const mongoose = require('mongoose');

const { Schema } = mongoose;

const getMustHave = (str) => `A message must have ${str}`;

// -------
// Schema
const def = {
    type: {
        type: String,
        enum: {
            values: ['text', 'image', 'audio', 'video'],
            message: 'Type must be text, image, audio or video',
        },
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
    sentAt: {
        type: Date,
        default: Date.now(),
    },
    deliveredAt: {
        type: Date,
    },
    seenAt: {
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
