const express = require('express')
const cors =  require('cors')

const app = express()
app.use(cors())
app.use(express.json())



app.post('/api/users',(req,res)=>{
    res.send(req.body)
})








app.listen(5000,()=>{
    console.log("connected to 5000")
})