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
const wallpaper = {
    light: ['light-1'],
    dark: [
        'dark-1',
        'dark-2',
        'dark-3',
        'dark-4',
        'dark-5',
        'dark-6',
        'dark-7',
        'dark-8',
        'dark-9',
    ],
};
// -------
// Schema
const def = {
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        unique: true,
        required: { value: true, message: getMustHave('a user.') },
    },
    color: {
        type: String,
        enum: {
            values: colors,
            message: 'Color choices are limited.',
        },
        default: 'grey',
    },
    theme: {
        type: String,
        enum: {
            values: themes,
            message: 'Theme can either be light or dark.',
        },
        default: 'dark',
    },
    wallpaper: {
        light: {
            type: String,
            enum: {
                values: wallpaper.light,
                message: 'Wallpaper choices are limited.',
            },
            default: 'light-1',
        },
        dark: {
            type: String,
            enum: {
                values: wallpaper.dark,
                message: 'Wallpaper choices are limited.',
            },
            default: 'dark-1',
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
};
const options = {};

const settingSchema = Schema(def, options);

// ---------
// Model
const Setting = mongoose.model('Setting', settingSchema);

module.exports = Setting;
