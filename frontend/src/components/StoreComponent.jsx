import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function StoreComponent() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const clickHandler = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    axios.get('http://localhost:8080/product')
      .then(result => setProducts(result.data))
      .catch(err => console.log(err));
  };

  return (
    <div className="store-container bg-gray-100">
      <div className="grid-container">
        <div className="relative w-[700px] items-center justify-between my-8 mx-auto">
          <input
            type="text"
            id="srch"
            className="w-full h-[40px] border border-gray-400 rounded-lg p-2 text-lg pl-50"
            placeholder="Search..."
          />
          <FaSearch className="ml-[720px] mt-[-32px] size-7" />
        </div>
        <h1 className="text-slate-800 font-bold text-7xl text-center my-8">Get the best deals</h1>
        <div className="flex justify-center gap-20 flex-wrap ">
          {products.map(product => (
            <div key={product.id} className="flex-card w-80 h-auto border border-gray-300 rounded-lg p-8 shadow-xl bg-white">
              <img src={product.image} alt={product.name} className="w-60 h-60 mx-auto" />
              <div className="flex justify-between items-center mt-4">
                <div className="text-left font-bold text-lg">{product.name}<br /><span className="text-green-600">{product.color}</span></div>
              </div>
              <div className="mt-4 flex justify-between">
                <button className="buy-button px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                  Buy Now
                </button>
                <button onClick={() => clickHandler(product._id)} className="view-details-button px-4 py-2 border border-2 border-red-500 text-red-500 rounded-lg hover:bg-blue-600">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-bottom h-20"></div>
    </div>
  );
}

export default StoreComponent;
