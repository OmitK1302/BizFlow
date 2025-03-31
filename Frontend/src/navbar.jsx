import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-right items-center p-3 bg-gray-100">
      {/* Left Section: Logo and Brand Name */}
      <div className="flex items-center">
        <img 
          src="/assets/logo.png" 
          alt="Logo" 
          className="w-10 h-10 object-contain"
        />
        <span className="ml-2 text-2xl font-bold text-gray-800">MyBrand</span>
      </div>

      {/* Center Section: Search Bar */}
      <div className="flex-1 mx-4">
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right Section: Navigation Links and Icons */}
      <div className="flex items-center space-x-4">
        <ul className="hidden md:flex space-x-4">
          <li>
            <a 
              href="/products" 
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              Products
            </a>
          </li>
          <li>
            <a 
              href="/about" 
              className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
            >
              About Us
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-3">
          <img 
            src="/assets/profile.png" 
            alt="Profile" 
            className="w-8 h-8 object-contain cursor-pointer"
          />
          <img 
            src="/assets/wishlist.png" 
            alt="Wishlist" 
            className="w-8 h-8 object-contain cursor-pointer"
          />
          <img 
            src="/assets/cart.png" 
            alt="Cart" 
            className="w-8 h-8 object-contain cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
