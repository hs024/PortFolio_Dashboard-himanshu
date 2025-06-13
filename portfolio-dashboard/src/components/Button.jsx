import React from "react";

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
  const baseClasses = `
    px-5 py-2.5 
    rounded-2xl 
    font-semibold 
    transition-all 
    duration-300 
    transform 
    hover:scale-105 
    active:scale-95 
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-blue-500 to-indigo-600 
      text-white 
      hover:from-blue-600 hover:to-indigo-700 
      focus:ring-indigo-400
      shadow-md hover:shadow-lg
    `,
    secondary: `
      bg-gray-100 
      text-gray-900 
      hover:bg-gray-200 
      dark:bg-gray-700 
      dark:text-white 
      dark:hover:bg-gray-600 
      focus:ring-gray-400
      shadow-sm hover:shadow-md
    `,
    danger: `
      bg-gradient-to-r from-red-500 to-pink-600 
      text-white 
      hover:from-red-600 hover:to-pink-700 
      focus:ring-red-400
      shadow-md hover:shadow-lg
    `,
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
