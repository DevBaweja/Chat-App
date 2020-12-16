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
    read: {
        type: String,
        enum: {
            values: ['mark', 'unmark'],
            message: 'Mark or Unmark.',
        },
        default: 'mark',
    },
    chat: {
        type: String,
        enum: {
            values: ['pin', 'unpin'],
            message: 'Pin or Unpin.',
        },
        default: 'unpin',
    },
    notification: {
        type: String,
        enum: {
            values: ['mute', 'unmute'],
            message: 'Mute or Unmute.',
        },
        default: 'unmute',
    },
    favourite: {
        type: String,
        enum: {
            values: ['add', 'remove'],
            message: 'Mute or Unmute.',
        },
        default: 'remove',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
};
const options = {};
const friendSchema = Schema(def, options);

// Indexing
friendSchema.index({ to: 1, from: 1 }, { unique: true });

// --------
// Middlewares
friendSchema.pre(/^find/, function () {
    // Populate from
    this.populate({
        path: 'from',
        select: 'photo name bio',
    });
    // Populate to
    this.populate({
        path: 'to',
        select: 'photo name bio',
    });
});

// ----------
// Model
const Friend = mongoose.model('friend', friendSchema);

module.exports = Friend;
