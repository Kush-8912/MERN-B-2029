const express = require('express')

const app = express()

// Read -> get

app.get('/' , (req , res)=>{
   res.send('Welcome to Express Server') 
})

app.get('/about' , (req , res)=>{
    res.send('This is my about page') 
 })




//Create , update , delete


app.listen(8002 , ()=>{
    console.log("Server Started at port 8002")
})