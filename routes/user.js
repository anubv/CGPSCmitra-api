const express = require('express')
const userRouter = express.Router();




userRouter.get('/', (req, res)=>{

    res.send('you are in users tab')

})



module.exports = userRouter;