import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../features/sidebar/sidebarSlice";
import Button from "./Button";

const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const theme = useSelector((state) => state.theme.mode); // assuming theme slice exists
  const dispatch = useDispatch();

  const menuItems = [
    { name: "Overview", icon: "📊" },
    { name: "Projects", icon: "📁" },
    { name: "Contact", icon: "📞" },
  ];

  return (
    <aside
      className={`
        fixed top-0 left-0 z-20 h-screen overflow-hidden shadow-xl transition-all duration-300
        ${isOpen ? "w-64" : "w-16"}
        ${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-800 to-gray-900 text-white"
            : "bg-gradient-to-b from-white to-gray-100 text-gray-800"
        }
      `}
    >
      <div className="p-2 mx-0">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 mx-0">
          {isOpen && (
            <h2 className="text-2xl font-extrabold tracking-tight">
              Portfolio
            </h2>
          )}
          <Button onClick={() => dispatch(toggle())} variant="secondary" classname=" top-2 mx-2 left-0 z-50 bg-gray-700 text-white dark:bg-gray-300 dark:text-black p-1  shadow-md ">
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
                    transition-all duration-300
                    ${
                      theme === "dark"
                        ? "hover:bg-gray-700"
                        : "hover:bg-gray-300"
                    }
                    hover:scale-[1.02]
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
