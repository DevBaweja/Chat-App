const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const getMustHave = (str) => `A user must have ${str}`;
// ----------
// Schema
const def = {
    photo: {
        type: String,
        default: 'img/avatar/default.png',
    },
    name: {
        type: String,
        required: { value: true, message: getMustHave('name') },
        trim: true,
    },
    email: {
        type: String,
        required: { value: true, message: getMustHave('email') },
        unique: true,
        lowercase: true,
        validate: {
            validator: validator.isEmail,
            message: getMustHave('valid email'),
        },
    },
    bio: {
        type: String,
        default: 'Exploring #ChatFuel',
        trim: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        required: { value: true, message: getMustHave('role') },
        default: 'user',
    },
    status: {
        type: String,
        enum: ['online', 'offline'],
        required: { value: true, message: getMustHave('status') },
        default: 'online',
    },
    lastSeen: {
        type: Date,
        default: Date.now,
    },
    password: {
        type: String,
        required: { value: true, message: getMustHave('password') },
        minlength: 8,
        select: false,
    },
    passwordConfirm: {
        type: String,
        required: { value: true, message: getMustHave('confirm password') },
        minlength: 8,
        validate: {
            validator: function (value) {
                // Value belongs to passwordConfirm
                // this belongs to document
                return this.password === this.passwordConfirm;
            },
            message: 'Passwords must match',
        },
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
};
const options = {};
const userSchema = Schema(def, options);

// -----------
// Middlewares
// Document Middlewares
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    // Hashing password
    this.password = await bcrypt.hash(this.password, 8);
    // Delete passwordConfirm
    this.passwordConfirm = undefined;
    next();
});

userSchema.pre('save', async function (next) {
    // As we need to do it only is password is modified and document is old
    if (!this.isModified('password') || this.isNew) return next();

    this.passwordChangedAt = Date.now() - 1000;
    next();
});
// Query Middlewares
userSchema.pre(/^find/, function (next) {
    // For deactivated users
    this.find({ active: { $ne: false } });
    next();
});

// -----------
// Methods
userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimeStamp) {
    if (this.passwordChangedAt) {
        const changedTimeStamp = parseInt(
            this.passwordChangedAt.getTime() / 1000,
            10
        );
        return JWTTimeStamp < changedTimeStamp;
    }
    return false;
};

userSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');
    // Encrypt and save as passwordResetToken
    this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    return resetToken;
};
// -----------
// Model
const User = mongoose.model('User', userSchema);

module.exports = User;
