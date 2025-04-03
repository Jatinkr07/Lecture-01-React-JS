import React, { useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen flex flex-col items-center justify-center`}
    >
      <h1 className="text-3xl font-bold mb-4">
        {darkMode ? "Dark Mode" : "Light Mode"}
      </h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg  hover:bg-blue-600 transition-all"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default DarkMode;
