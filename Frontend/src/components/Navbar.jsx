import React, { useState } from 'react';
import '../index.css'
import profile from '../assets/profile.png';
import heartDefault from '../assets/heartDefault.png';
import cart from '../assets/cart.png';
import heartHover from '../assets/red_heart.png';

const WishlistIcon = () => {
    const [imgSrc, setImgSrc] = useState(heartDefault);
    return (
      <img 
        src={imgSrc}
        alt="Wishlist" 
        className="w-6 h-6 object-contain cursor-pointer transition-all duration-200 navbar"
        onMouseEnter={() => setImgSrc(heartHover)}
        onMouseLeave={() => setImgSrc(heartDefault)}
      />
    );
  };

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 !bg-white shadow-md z-50 navbar">
      {/* Left Section: Logo and Brand Name */}
      <div className="flex items-center !bg-white">
        <img 
          src="/assets/logo.png" 
          alt="Logo" 
          className="w-10 h-10 object-contain navbar"
        />
        <span className="ml-2 text-2xl font-bold text-black !bg-white">BizFlow</span>
      </div>

      {/* Center Section: Search Bar */}
      <div className="flex-1 mx-4">
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full p-2 border !bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right Section: Navigation Links and Icons */}
      <div className="flex items-center space-x-4 navbar">
        <ul className="hidden md:flex space-x-4 navbar">
          <li>
            <a 
              href="/products" 
              className="text-black hover:bg-[#EBE5C2] p-3 transition-colors duration-200 navbar"
            >
              Products
            </a>
          </li>
          <li className='navbar'>
            <a 
              href="/about " 
              className="text-black navbar hover:text-blue-400 transition-colors duration-200"
            >
              About Us
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-3 navbar">
          <img 
            src={profile}
            alt="Profile" 
            className="w-8 h-8 object-contain cursor-pointer navbar"
          />
          <WishlistIcon/>
          <img 
            src={cart} 
            alt="Cart" 
            className="w-8 h-8 object-contain cursor-pointer navbar"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
