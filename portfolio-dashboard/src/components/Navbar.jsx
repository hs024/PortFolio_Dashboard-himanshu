import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../features/sidebar/sidebarSlice";
import { toggleTheme } from "../features/theme/themeSlice";
import Button from "./Button";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  return (
    <header className="fixed top-0 left-12 right-0 z-10 bg-gradient-to-r from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 shadow-md transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-4 mx-3 max-w-7xl ">
        {/* Sidebar Toggle + Title */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 bg-[length:300%_300%] animate-gradientText bg-clip-text text-transparent">
            Portfolio Dashboard – Himanshu Sharma
          </h1>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center space-x-4">
          <Button onClick={() => dispatch(toggleTheme())} variant="secondary">
            <span className="text-lg transition-transform duration-300 hover:rotate-12">
              {theme === "light" ? "🌙" : "☀️"}
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
