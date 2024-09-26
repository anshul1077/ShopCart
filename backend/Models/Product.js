const mongoose = require('mongoose')

//schema
const productSchema = new mongoose.Schema({
    productName : {
        type : String,
        required: true
    },
    productPrice : {
        type : Number,
        required: true
    },
    productRatings : {
        type : Number
    },
    productVendor: {
        type : String,
        required: true
    }
})

//model
const product = mongoose.model('product', productSchema);
