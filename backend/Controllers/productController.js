const product = require('../Models/Product')
const user = require('../Models/User');

// delete product
//update product

const getAllProducts = async (req, res) => {
    try {
        // find() -> returns all entities
        const products = await product.find();
        return res.status(200).json(products); // Corrected variable name
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Failed to retrieve products." });
    }}

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
        const { productId, userId } = req.body;
    
        // Find the user by userId
        const User = await user.findById(userId);
        if (!User) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        // Check if the product is already in the cart
        const isProductInCart = User.cart.some((item) => item.productId.toString() === productId);
        if (isProductInCart) {
          return res.status(400).json({ message: 'Product already in cart' });
        }
    

        User.cart.push({ productId });
        await User.save();
    
        return res.status(200).json({ message: 'Product added to cart', cart: user.cart });
      } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Failed to add product to cart' });
      }
}

const viewCart = async (req, res) => {
    try {
      const { userId } = req.params; 
       const User = await user.findById(userId).populate('cart.productId');
      if (!User) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      return res.status(200).json({ cart: User.cart });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to fetch cart' });
    }
  };

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
module.exports = {viewCart, getAllProducts, getOneProduct, addProduct, deleteProduct, updateProduct }
