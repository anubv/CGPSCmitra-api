const express = require('express')
const employeeRouter = express.Router();
const Employee = require('../models/employee')


//get all
employeeRouter.get('/all', async (req, res) => {
    try {
        const employees = await Employee.find()
        if (employees == null) {
            res.status(404).json({
                message: "no users found"
            })
        } else {
            res.json(employees)
        }
    } catch (error) {
        res.status(500).json({
            message: "Can't connect to database"
        })
    }

})

//get from-to list of employees
employeeRouter.get('/', async (req, res) => {
    let employee
    try {
        var after = parseInt(req.query.after)
        var before = parseInt(req.query.pagesize) + after

        employees = await Employee.find({
            id: {
                $gt: after,
                $lt: before
            }
        })
        if (employees == null)
            res.status(404).json({
                message: '404 not found'
            })
        else
            res.json(employees)
    } catch (error) {
        res.status(500).json({ error })
    }
})

//post 
employeeRouter.post('/', async (req, res) => {
    const employee = new Employee({
        id: req.body.id,
        employee_name: req.body.name,
        employee_age: req.body.age,
        employee_salary: req.body.salary
    })
    try {
        const newEmployee = await employee.save()
        res.status(201).json(newEmployee)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

//update one
employeeRouter.patch('/:id', (req, res) => [

])

//delete one
employeeRouter.delete('/:id', async (req, res) => {

    const employee = await Employee.findByIdAndRemove(req.params.id)
    res.json(employee)

})


async function getEmployee(req, res, next) {

    let employee
    try {
        employee = Employee.findById(req.params.id)
        if (employee == null) {
            res.status(404).json({
                message: "Employee not Found"
            })
        }
        else
            res.employee = employee

    } catch (error) {
        res.status(500).json({
            message: "Can't connect to Database"
        })
    }

    next()
}


module.exports = employeeRouter;