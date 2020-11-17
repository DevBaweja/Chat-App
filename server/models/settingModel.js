const mongoose = require('mongoose');

const { Schema } = mongoose;

const getMustHave = (str) => `A message must have ${str}`;
const colors = [
    'red',
    'aqua',
    'green',
    'blueberry',
    'peach',
    'blue',
    'pink',
    'purple',
    'metal',
    'gold',
    'yellow',
    'lilac',
    'forest',
    'orange',
    'teal',
    'carrot',
    'maroon',
    'blood',
    'mud',
    'grass',
    'grey',
];
const themes = ['light', 'dark'];
// -------
// Schema
const def = {
    color: {
        type: String,
        enum: {
            values: colors,
            message: 'Color choices are limited.',
        },
        default: 'grey',
        required: { value: true, message: getMustHave('a color.') },
    },
    theme: {
        type: String,
        enum: {
            values: themes,
            message: 'Theme can either be light or dark.',
        },
        default: 'dark',
        required: { value: true, message: getMustHave('a theme.') },
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
};
const options = {};

const settingSchema = Schema(def, options);

// ---------
// Model
const Setting = mongoose.model('Setting', settingSchema);

module.exports = Setting;
