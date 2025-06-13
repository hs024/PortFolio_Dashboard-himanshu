import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../features/sidebar/sidebarSlice";
import { toggleTheme } from "../features/theme/themeSlice";
import Button from "./Button";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  return (
    <header className="bg-gradient-to-r from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 shadow-md transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Left: Sidebar Toggle + Title */}
        <div className="flex items-center">
          <Button
            onClick={() => dispatch(toggle())}
            variant="secondary"
            className="mr-4"
          >
            ☰
          </Button>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white tracking-tight">
            Portfolio Dashboard
          </h1>
        </div>

        {/* Right: Theme Toggle + Profile Circle */}
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
