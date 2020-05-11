const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())



const feedRouter = require('./routes/feed')
app.use('/feed', feedRouter)
const userRouter = require('./routes/user')
app.use('/users', userRouter)



app.listen(PORT, ()=>{
    console.log('listening on ' + PORT)
})







