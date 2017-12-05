const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true }
});

const userModel = mongoose.model('userSchema', userSchema, 'users');
module.exports = userModel;