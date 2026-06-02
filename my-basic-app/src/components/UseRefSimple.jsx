import React from 'react'
import { useRef } from "react";

const UseRefSimple = () => {
     const inputRef = useRef();

      const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
         <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
    </div>
  )
}

export default UseRefSimple