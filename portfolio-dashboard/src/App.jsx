import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "./features/sidebar/sidebarSlice";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Overview from "./sections/Overview";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Button from "./components/Button";

const App = () => {
  const theme = useSelector((state) => state.theme.mode);
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 transition-colors">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        } shrink-0`}
      >
        <Sidebar />
      </div>

     
        
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 overflow-auto flex-1">
          <div className="max-w-6xl mx-auto space-y-8">
            <Overview />
            <Projects />
            <Contact />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
