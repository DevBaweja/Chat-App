const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const getMustHave = (str) => `A user must have ${str}`;
// ----------
// Schema
const def = {
    name: {
        type: String,
        required: { value: true, message: getMustHave('name') },
        trim: true,
    },
    email: {
        type: String,
        required: { value: true, message: getMustHave('email') },
        // !For Development
        // unique: true,
        lowercase: true,
        validate: {
            validator: validator.isEmail,
            message: getMustHave('valid email'),
        },
    },
    photo: {
        type: String,
        default: 'default.png',
    },
    role: {
        type: String,
        default: 'user',
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
    createAt: {
        type: Date,
        default: Date.now(),
    },
};
const options = {};
const userSchema = Schema(def, options);

// -----------
// Middlewares
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    // Hashing password
    this.password = await bcrypt.hash(this.password, 8);
    // Delete passwordConfirm
    this.passwordConfirm = undefined;
});

// -----------
// Model
const User = mongoose.model('User', userSchema);

module.exports = User;
