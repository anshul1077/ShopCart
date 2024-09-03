const mongoose = require('mongoose');
require('dotenv').config()

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB")
    }
    catch (error) {
        console.log("Connection failed!!")
    }
}

module.exports = connectToDb