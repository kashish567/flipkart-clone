import React from 'react';
import { UserIcon, ShoppingCartIcon, UserGroupIcon } from '@heroicons/react/outline';

const Header = () => {
  return (
    <header className="bg-white text-blue-500 py-4 shadow-md">
      <div className="container mx-auto mr-20 flex justify-between items-center">
        <div className="text-2xl ml-10 italic font-bold">Flipkart</div>
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full p-2 rounded bg-blue-100 text-black"
          />
        </div>
        <nav className="space-x-4 flex items-center">
          <a href="#" className="hover:underline text-black flex items-center space-x-1">
            <UserIcon className="h-5 w-5" />
            <span>Login</span>
          </a>
          <a href="#" className="hover:underline text-black flex items-center space-x-1">
            <ShoppingCartIcon className="h-5 w-5" />
            <span>Cart</span>
          </a>
          <a href="#" className="hover:underline text-black flex items-center space-x-1">
            <UserGroupIcon className="h-5 w-5" />
            <span>Become a Seller</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
