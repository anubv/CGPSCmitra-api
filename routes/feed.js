const express = require('express')
const feedRouter = express.Router();







feedRouter.route('/')
.get((req,res)=>{
    res.send('this is router page')
})




module.exports = feedRouter










module.exports = feedRouter;