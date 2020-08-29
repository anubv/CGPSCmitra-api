const express = require('express')
const employeeRouter = express.Router();
const Employee = require('../models/employee')


//get from-to list of employees
employeeRouter.get('/', async (req, res) => {
    let employee
    try {
        var from = parseInt(req.query.from)
        var pagesize = parseInt(req.query.pagesize)
        if (from==-1){
        employees = await Employee.find().limit(pagesize).sort({$natural:-1})
    }else{
        employees = await Employee.find({
            id: {
                $lte: from
            }
    }).limit(pagesize).sort({$natural:-1})
    }
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

//delete one
employeeRouter.delete('/:id', async (req, res) => {

    const employee = await Employee.findByIdAndRemove(req.params.id)
    res.json(employee)

})


module.exports = employeeRouter;