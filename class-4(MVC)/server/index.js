const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const productRoutes = require('./routes/product.routes.js')

dotenv.config()

const app = express()
app.use(express.json())

app.use('/products' , productRoutes) // initilizimg product Routes




mongoose.connect(process.env.dbUri).then(() => {
    console.log('DB Connected')
}).catch((err) => {
    console.log(err)
})

app.get('/', (req, res) => {
    res.send('hello from the Server')
})




app.listen(8006, () => {
    console.log("server Started")
})
