// component/footer.jsx
import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold">Get to Know Us</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">About Amazon</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Make Money with Us</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Sell on Amazon</a></li>
              <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
              <li><a href="#" className="hover:underline">Advertise Your Products</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Amazon Payment Products</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Amazon Credit Cards</a></li>
              <li><a href="#" className="hover:underline">Shop with Points</a></li>
              <li><a href="#" className="hover:underline">Reload Your Balance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Let Us Help You</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Your Orders</a></li>
              <li><a href="#" className="hover:underline">Shipping Rates & Policies</a></li>
              <li><a href="#" className="hover:underline">Amazon Prime</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 py-4">
          <p className="text-center text-sm text-gray-400">
            © 2024 Amazon Clone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
