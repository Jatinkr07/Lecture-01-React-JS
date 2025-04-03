import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button className="p-3" onClick={handleDecrease}>
        Decreese
      </button>
      <h1>Count : {count}</h1>
      <button className="p-3" onClick={handleIncrease}>
        Increase
      </button>
    </div>
  );
};

export default Counter;
