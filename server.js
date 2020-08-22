require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

app.use(express.json())


//routers
const employeeRouter = require('./routes/employees')
app.use('/employees', employeeRouter)
app.get('/', (req,res)=>{
    res.send("you are welcome!")
})



//db
mongoose.connect(process.env.MONGODB_URI , {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.once('open', ()=> console.log('connected to montyDatabase'))

app.listen(PORT, ()=>{
    console.log('listening on ' + PORT)
})







