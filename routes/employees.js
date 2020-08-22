const express = require('express')
const employeeRouter = express.Router();
const Employee = require('../models/employee')



//get all
// employeeRouter.get('/', async (req, res) => {
//     try {
//         const employees = await Employee.find()
//         res.json(employees)
//     } catch (error) {
//         res.status(500).json(error.message)
//     }
// })

//get one
employeeRouter.get('/:id', (req, res) => {

})

//get list of employees
employeeRouter.get('/', async (req, res) => {
    try {
        const employees = await Employee.find({
            id: {
                $gt: req.body.after,
                $lt: req.body.before
            }
        })
        if (employees == null)
            res.status(404).json({ message: '404 not found' })
        else
            res.json(employees)
    } catch (error) {

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

employeeRouter.delete('/:id', (req, res) => [

])


async function getEmployee(req, res, next) {

    let employee
    try {

    } catch (error) {

    }

    res.employee = employee
}


module.exports = employeeRouter;