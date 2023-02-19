// Employee model
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'Please enter a first name'],
    },
    last_name: {
        type: String,
        required: [true, 'Please enter a last name'],
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: [true, 'Email already exists'],
    },
    gender: {
        type: String,
        enum: ['Male','Female','Other'],
    },
    salary: {
        type: Number,
        required: [true, 'Please enter a salary'],
    }
});

const emp_db = mongoose.model('Employee', EmployeeSchema);
module.exports = emp_db;

