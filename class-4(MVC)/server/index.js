const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const app = express()






mongoose.connect(process.env.dbUri).then(()=>{
    console.log('DB Connected')
}).catch((err)=>{
    console.log(err)
})

app.get('/' , (req , res)=>{
    res.send('hello from the Server')
})




app.listen(8006, () => {
    console.log("server Started")
})
