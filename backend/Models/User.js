const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        type: Array,
        default: []
    }
})

const user = mongoose.model('user', userSchema);