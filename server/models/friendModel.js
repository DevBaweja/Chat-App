const mongoose = require('mongoose');

const { Schema } = mongoose;

const getMustHave = (str) => `A friend must have ${str}`;

// ----------
// Schema
const def = {
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: { value: true, message: 'A friend must be from a user' },
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: { value: true, message: 'A friend must be to a user' },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
};
const options = {};
const friendSchema = Schema(def, options);

// ----------
// Middlewares

// ----------
// Model
const Friend = mongoose.model('friend', friendSchema);

module.exports = Friend;
