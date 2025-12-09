import { useState, useCallback } from "react";

function WithCallBack() {
  const [count, setCount] = useState(0);

  // ✅ This function is created ONLY ONCE
  const increment = useCallback(() => {
    console.log("✅ increment function is REUSED (not recreated)");
    setCount(prev => prev + 1);
  }, []); // empty dependency = create only once

  console.log("🔄 Parent component rendered");

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default WithCallBack;
