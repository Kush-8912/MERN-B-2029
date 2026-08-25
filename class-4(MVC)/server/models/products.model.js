const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    ratings: {
        type: Number
    },

    isIsStock: {
        type: Boolean,
        required: true
    }
})

const ProductModel = mongoose.model('Product', productSchema)