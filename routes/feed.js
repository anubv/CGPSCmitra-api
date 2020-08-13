const express = require('express')
const feedRouter = express.Router();




feedRouter.get('/', (req,res)=>{
    res.json(
        [{
           "employee_name" : "mahesh",
           "employee_age" : "56",
           "employee_salary" : "5000",
           "id": 1
        },
         {
            "employee_name" : "ganesh",
            "employee_age" : "78",
            "employee_salary" : "3000",
            "id": 2
        },
        {
            "employee_name" : "suresh",
            "employee_age" : "45",
            "employee_salary" : "6500",
            "id": 3
        }]
    
     )
})




module.exports = feedRouter










module.exports = feedRouter;