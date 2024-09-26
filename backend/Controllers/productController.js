const product = require('../Models/Product')

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
const addProduct = async (req, res) => {
    try {
        const data = req.body.data;
        console.log(data);
        const newProduct = new product(data);
        newProduct.save();
        return res.status(201).json(newProduct)
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Failed to add product." })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { productID } = req.params
        const findProduct = await product.findOne({ _id: productID })
        if (!findProduct) return res.status(404).json({ message: "Product not found" })
        //DELETE PRODUCT
        return res.status(200).json({ message: "Product deleted!" });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Failed to delete product." })
    }
}

const updateProduct = async (req, res) => {
    try {
        const { productID } = req.params;
        const updateData = req.body;
        const updateProduct = await product.findByIdAndUpdate(
            productID,
            { $set: updateData },
            { new: true }
        )
        if (!updateProduct) {
            return res.status(404).json({ message: "product cannot be found!" });
        }
        res.status(200).json({ message: "your product is successfully updated.." });
    }
    catch (err) {
        res.status(500).json({ message: "failed to update the product", err: err.message });
    }
}
module.exports = { getAllProducts, getOneProduct, addProduct, deleteProduct, updateProduct }
