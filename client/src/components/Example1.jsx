import React, { useState } from "react";

const Example1 = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div
      className={`${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div>{isDark ? "Dark" : "Light"}</div>
      <button
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        Theme
      </button>
    </div>
  );
};

export default Example1;
