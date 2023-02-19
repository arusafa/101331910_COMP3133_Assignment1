const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        primaryKey: true,
        required: [true, 'Please enter a username'],
    },
    email: {
        type: String,
        unique: [true, 'Email already exists'],
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
    },
});

const user_db = mongoose.model('User', UserSchema);
module.exports = user_db;