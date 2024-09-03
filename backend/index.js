const express = require('express');
const connectToDb = require('./config/db');
const productRoutes = require('./Routes/productRoutes')

require('dotenv').config()
const app = express();
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
})

app.use('/product', productRoutes)
app.use(express.json());
connectToDb();
