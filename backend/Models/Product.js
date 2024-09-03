const mongoose = require('mongoose')

//schema
const productSchema = new mongoose.Schema({
    productName : {
        type : String,
        required: true
    },
    productPrice : {
        type : int,
        required: true
    },
    productRatings : {
        type : int
    },
    productVendor: {
        type : String,
        required: true
    }
})

//model
const product = mongoose.model('product', productSchema);
