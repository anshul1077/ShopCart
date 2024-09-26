const express = require('express');
const router = express.Router();
const { getAllProducts, getOneProduct, addProduct, deleteProduct, updateProduct } = require('../Controllers/productController')

router.get('/', getAllProducts)
router.get('/product/:productID', getOneProduct)
router.post('/addProduct', addProduct)
router.delete('/deleteProduct/:productID', deleteProduct)
router.patch('/updateProduct/:productID', updateProduct)

module.exports = router