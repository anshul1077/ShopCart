import React from 'react'
import { FaSearch } from 'react-icons/fa';
import products from '../data/products.json';

function StoreComponent() {
  return (
    <div className='store-container'>
      <div className='grid-container'>
          <div className='relative w-[700px] items-center justify-between my-8 mx-auto'>
            <input
              type='text'
              id='srch'
              className='w-full h-[40px] border border-gray-400 rounded-lg p-2 text-lg pl-50'
              placeholder='Search...'
            />
            <FaSearch className='ml-[720px] mt-[-32px] size-7' />
          </div>
        <div className='flex justify-center gap-20 flex-wrap '>
          {
            products.map(product => (
              <div key={product.id} className='flex-card w-80 h-auto bg-gray-200 border border-gray-300 rounded-lg p-6 shadow-xl'>
              <img src={product.image} alt={product.name} className='w-60 h-60 mx-auto' />
              <div className='flex justify-between items-center mt-4'>
                <div className='text-left font-bold text-lg'>{product.name}<br /><span className='text-green-600'>{product.color}</span></div>
                <button className='view-details-button px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>
                  View Details
                </button>
              </div>
              <div className='mt-4 flex justify-center'>
                <button className='buy-button px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600'>
                  Buy Now
                </button>
              </div>
            </div>
            ))
          }
         
        </div>

      </div>
      <div className='space-bottom h-20'></div>
    </div>
  )
}

export default StoreComponent;
