const mongoose = require('mongoose');

const { Schema } = mongoose;

// -------
// Schema
const def = {
    status: {
        type: String,
        enum: {
            values: ['pending', 'accepted', 'declined'],
            message: 'Status must be pending, accepted or declined',
        },
        default: 'pending',
    },
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: { value: true, message: 'A request must be from a user' },
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: { value: true, message: 'A request must be to a user' },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
};
const options = {};

const requestSchema = Schema(def, options);

// Indexing
requestSchema.index({ to: 1, from: 1 }, { unique: true });

// --------
// Middlewares
requestSchema.pre(/^find/, function () {
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
// ---------
// Model
const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
