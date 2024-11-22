import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const userId = localStorage.getItem("userId")

  useEffect(() => {
    axios
      .get(`http://localhost:8080/product/product/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  // Function to handle Add to Cart
  const handleAddToCart = () => {
    console.log(product._id,userId)
    axios
      .post('http://localhost:8080/product/addProduct', { productId: product._id,userId:userId })
      .then(() => alert(`${product.name} added to cart!`))
      .catch((err) => console.error(err));
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details-container flex bg-gray-100 p-10">
      <div className="image-container w-1/2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full 
          h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="details-container w-1/2 pl-10">
        <h2 className="text-4xl font-bold text-slate-800">{product.name}</h2>
        <p className="text-xl text-green-600 my-4">{product.color}</p>
        <p className="text-lg my-2">{product.description}</p>
        <p className="text-2xl font-semibold text-red-500 my-4">
          Price: ${product.price}
        </p>
        <button
          className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 mt-4"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
        <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 mt-4 ml-4">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
