const express = require('express')

const app = express()

app.get('/' , (req , res)=>{
    res.send('Hello from the Server')
})

app.listen(8004 , ()=>{
    console.log('Server Started')
})