import React from "react";

const Card = ({ children, className = "", title }) => {
  return (
    <div
      className={`
        bg-gradient-to-br from-white to-gray-100 
        dark:from-gray-800 dark:to-gray-900 
        rounded-2xl 
        shadow-md 
        hover:shadow-xl 
        p-6 
        transition-all 
        duration-300 
        transform 
        hover:scale-[1.02] 
        ${className}
      `}
    >
      {title && (
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white tracking-tight">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default Card;
