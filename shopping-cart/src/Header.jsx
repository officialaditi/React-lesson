import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
       <Link to='/'> <h1 className="text-xl font-bold">Open Shop</h1></Link>
        <nav className="flex space-x-4">
          <Link to="/cart" className="hover:text-gray-300">
            Shopping Cart {`(${cartItems.length})`}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
