import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex gap-8 justify-center">
      <button
        className="px-3 py-2 border-2 bg-blue-500"
        onClick={() => setCount(count - 1)}
      >
        decrease
      </button>
      <h1 className="bg-emerald-400 p-2 rounded-full">Count : {count}</h1>
      <button
        className="px-3 py-2 border-2 bg-blue-500"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </div>
  );
};

export default Counter;
