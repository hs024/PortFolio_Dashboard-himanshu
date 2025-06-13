import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Overview from "./sections/Overview";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const App = () => {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="flex pt-16">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-6xl mx-auto">
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
