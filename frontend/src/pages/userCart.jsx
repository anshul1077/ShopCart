import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserCart() {
  const [cartItems, setCartItems] = useState([]);
  const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage

  useEffect(() => {
    if (userId) {
      fetchCartItems(userId);
    }
  }, [userId]);

  const fetchCartItems = (userId) => {
    axios
      .get(`http://localhost:8080/product/cart/${userId}`)
      .then((response) => setCartItems(response.data.cart || []))
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen bg-gray-700 flex flex-col items-center justify-center p-6">
      <div className="bg-indigo-200 p-6 shadow-lg rounded-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.productId._id}
                className="flex flex-col md:flex-row items-center mb-4 border-b pb-4"
              >
                {/* Product Image */}
                <img
                  src={item.productId.image}
                  alt={item.productId.name}
                  className="w-24 h-24 object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
                />
                
                {/* Product Details */}
                <div className="flex flex-col w-full">
                  <span className="font-medium text-lg">{item.productId.name}</span>
                  <span className="text-gray-600">Price: ${item.productId.price}</span>
                  <span className="text-gray-600">Color: {item.productId.color}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default UserCart;
