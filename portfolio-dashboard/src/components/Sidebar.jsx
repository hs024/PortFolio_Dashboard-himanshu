import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../features/sidebar/sidebarSlice";
import Button from "./Button";

const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const menuItems = [
    { name: "Overview", icon: "📊" },
    { name: "Projects", icon: "📁" },
    { name: "Contact", icon: "📞" },
  ];

  return (
    <aside
      className={`
        bg-gradient-to-b from-gray-800 to-gray-900 text-white 
        fixed md:relative z-10 h-full 
        transition-all duration-500 ease-in-out 
        ${isOpen ? "w-64" : "w-0 md:w-20"}
        overflow-hidden shadow-xl
      `}
    >
      <div
        className={`p-4 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 md:opacity-100"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          {isOpen && (
            <h2 className="text-2xl font-extrabold tracking-tight">
              Portfolio
            </h2>
          )}
          <Button
            onClick={() => dispatch(toggle())}
            className="md:hidden"
            variant="secondary"
          >
            {isOpen ? "✕" : "☰"}
          </Button>
        </div>

        {/* Nav Items */}
        <nav>
          <ul className="space-y-3">
            {menuItems.map(({ name, icon }) => (
              <li key={name}>
                <a
                  href={`#${name.toLowerCase()}`}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg 
                    hover:bg-gray-700 hover:scale-[1.02] transition-all duration-300
                    ${!isOpen ? "justify-center" : ""}
                  `}
                  title={!isOpen ? name : ""}
                >
                  <span className="text-lg">{icon}</span>
                  {isOpen && (
                    <span className="text-md font-medium">{name}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
