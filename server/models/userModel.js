const mongoose = require('mongoose');
const validator = require('validator');

const { Schema } = mongoose;

const getMustHave = (str) => `A user must have ${str}`;
// ----------
// Schema
const def = {
    name: {
        type: String,
        required: [true, getMustHave('name')],
    },
    email: {
        type: String,
        required: [true, getMustHave('email')],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, getMustHave('valid email')],
    },
    password: {
        type: String,
        required: [true, getMustHave('password')],
        minlength: 8,
    },
    passwordConfirm: {
        type: String,
        required: [true, getMustHave('confirm password')],
        minlength: 8,
    },
};
const options = {};
const userSchema = Schema(def, options);

// -----------
// Middlewares

// -----------
// Model
const User = mongoose.model('User', userSchema);

module.exports = User;
