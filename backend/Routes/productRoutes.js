const express = require('express');
const sayHi = require('../Controllers/productController')
const router = express.Router();

router.get('/',  sayHi)
router.get('/hey', async (req, res) => {
    res.send("Hi")
})
// get all products 
//get one product
// add product
// delete product
//update product

module.exports = router