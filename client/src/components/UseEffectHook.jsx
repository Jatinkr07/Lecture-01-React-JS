import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("RENDERINF here.......");
    setCount(count + 1);
  }, []);
  return (
    <div>
      <div>Count : {count}</div>
    </div>
  );
};

export default UseEffectHook;
