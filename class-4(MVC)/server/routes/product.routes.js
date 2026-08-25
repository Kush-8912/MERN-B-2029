const express = require('express')
const ProductModel = require('../models/products.model.js')
const {createProduct , getAllProducts , updateProduct , deleteProduct} = require('../controllers/product.controllers.js')


const productRoutes = express.Router() // This helps you initilaie routing


productRoutes.get('/getAll' ,getAllProducts )

productRoutes.post('/create' ,createProduct )

productRoutes.put('/update/:id' , updateProduct)

 productRoutes.delete('/delete/:id' , deleteProduct)


module.exports = productRoutes