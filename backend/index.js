const express = require('express');
const connectToDb = require('./config/db');
const productRoutes = require('./Routes/productRoutes')
const userRoutes = require('./Routes/userRoutes')
const cors = require('cors')

require('dotenv').config()
const app = express();
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
})
app.use(cors())
app.use(express.json());
app.use('/product', productRoutes)
app.use('/user', userRoutes)
connectToDb();
