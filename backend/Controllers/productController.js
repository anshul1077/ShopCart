const product = require('../Models/Product')

// add product
// delete product
//update product

const getAllProducts = async (req, res) => {
    try {
        //find() -> return all entities
        const products = await product.find();
        return res.status(200).json(product)
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Failed to retrieve products." })
    }
}

const getOneProduct = async (req, res) => {
    try {
        const { productID } = req.params
        const findProduct = await product.findOne({ _id: productID })
        if (!findProduct) return res.status(404).json({ message: "Product not found" })
        return res.status(200).json(findProduct)
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Failed to retrieve product." })
    }
}


module.exports = sayHi