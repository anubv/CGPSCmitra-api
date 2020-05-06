const express = require('express')
const app = express()
const router = express.Router()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/', router)

app.listen(PORT, ()=>{
    console.log('listening on ' + PORT)
})

router.get('/', (req, res)=>{

    res.json({message : 'you are here'})

})