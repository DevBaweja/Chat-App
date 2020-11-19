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
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: { value: true, message: 'A message must be from a user' },
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: { value: true, message: 'A message must be to a user' },
    },
    sentAt: {
        type: Date,
        default: Date.now,
    },
    deliveredAt: {
        type: Date,
    },
    seenAt: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
};
const options = {};

const messageSchema = Schema(def, options);

// --------
// Middlewares
messageSchema.pre(/^find/, function () {
    // Populate from
    this.populate({
        path: 'from',
        select: 'photo name',
    });
    // Populate to
    this.populate({
        path: 'to',
        select: 'photo name',
    });
});
// ---------
// Model
const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
