const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true
    },
    employee_name: {
        type: String,
        required: true
    },
    employee_age: {
        type: Number,
        required: true
    },
    employee_salary: {
        type: Number,
        required: true
    },
})


module.exports = mongoose.model('Employee', employeeSchema)