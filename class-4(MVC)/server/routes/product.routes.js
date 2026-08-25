const express = require('express')
const ProductModel = require('../models/products.model.js')
const {createProduct} = require('../controllers/product.controllers.js')


const productRoutes = express.Router() // This helps you initilaie routing


// productRoutes.get()

productRoutes.post('/create' ,createProduct )

// productRoutes.put()

// productRoutes.delete()


module.exports = productRoutes