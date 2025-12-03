import { useState } from "react";

function UseStateCounter() {
  const [count, setCount] = useState(0);
   const handleDecrement = () => {
    setCount(prev => Math.max(prev - 1, 0));  // stops at 0
  };
   const handleIncrement = () => {
    setCount(prev => Math.min(prev + 1, 10));   // limit max 100
  };


  return (
    <div className="container mt-5">

      <h2>Counter: {count}</h2>

      {/* <button 
        className="btn btn-primary"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button> */}
       <button 
        className="btn btn-primary me-2"
        onClick={handleIncrement}
      >
        Increase
      </button>
       {/* <button 
        className="btn btn-primary"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button> */}
       <button 
        className="btn btn-danger"
        onClick={handleDecrement}
      >
        Decrement
      </button>

    </div>
  );
}

export default UseStateCounter;
