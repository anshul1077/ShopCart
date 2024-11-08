import React, { useState } from 'react';

function UserCart() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 159 },
    { id: 3, name: 'Product 3', price: 242 },
    { id: 4, name: 'Product 4', price: 399 },
    { id: 5, name: 'Product 5', price: 499 },
    { id: 6, name: 'Product 6', price: 449 }
  ]);

  const loginHandler = () => setIsLoggedIn(true);

  return (
    <div className="min-h-screen bg-gray-700 flex flex-col items-center justify-center p-6">
      {!isLoggedIn ? (
        <div className="bg-indigo-200 p-8 shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Login to View Your Cart</h2>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
            onClick={loginHandler}
          >
            Login
          </button>
        </div>
      ) : (
        <div className="bg-indigo-200 p-6 shadow-lg rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center mb-4 border-b pb-2"
                >
                  <span className="font-medium">{item.name}</span>
                  <span className="text-gray-600">${item.price}</span>
                </li>
              ))}
            </ul>
          )}
          <button
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full"
            onClick={() => setCartItems([])}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default UserCart;
