import { useState } from "react";

function WithoutCallBack() {
  const [count, setCount] = useState(0);

  // ❌ This function is recreated on EVERY render
  const increment = () => {
    console.log("❌ increment function is CREATED AGAIN");
    setCount(count + 1);
  };

  console.log("🔄 Parent component rendered");

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default WithoutCallBack;
