import { useState, useEffect } from "react";

function UseStateExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
  console.log("Runs on every render");
 }); //Every Render
  useEffect(() => {
    console.log("Count Changed once:", count);
  }, []); // Runs only once

   useEffect(() => {
    console.log("Count Changed:", count);
  }, [count]); // runs when count updates

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default UseStateExample;
