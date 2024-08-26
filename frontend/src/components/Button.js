import React from "react";

const Button = ({ type, onClick, children, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
