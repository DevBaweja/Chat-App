const mongoose = require('mongoose');

const { Schema } = mongoose;
// -------
// Schema
const def = {
    type: {
        type: String,
        enum: ['text', 'image', 'audio', 'video'],
        default: 'text',
    },
    content: {
        type: String,
        trim: true,
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
