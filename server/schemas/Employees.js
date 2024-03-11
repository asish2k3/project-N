const mongoose = require('mongoose');

const validGenders = ['male', 'female', 'transgender'];
const validDesignations = ['HR', 'Manager', 'Sales'];

const EmployeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: validGenders // Ensures the gender field value is one of the specified options
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true,
        enum: validDesignations // Ensures the designation field value is one of the specified options
    },
    courses: {
        type: [String],
        enum: ['BSc', 'BCA', 'MSc'], // Ensures the courses field values are from the specified options
        default: [] // Default value is an empty array
    },
    image:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Employee", EmployeeSchema);
