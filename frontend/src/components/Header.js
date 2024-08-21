import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">
          <Link to="/">BookExchange</Link>
        </h1>
        <nav className="space-x-6">
          <Link to="/register" className="text-gray-700 hover:text-blue-600">
            Register
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600">
            Login
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
