const mongoose = require('mongoose');

const { Schema } = mongoose;

const getMustHave = (str) => `A user must have ${str}`;

// ----------
// Schema
const def = {};
const options = {};
const connectionSchema = Schema(def, options);

// ----------
// Middlewares

// ----------
// Model
const Connection = mongoose.model('connection', connectionSchema);

module.exports = Connection;
