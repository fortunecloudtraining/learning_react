import { useState } from "react";

function InputExample() {
  const [name, setName] = useState("");

  return (
    <div className="container">
        <hr />
        <label>Enter Name</label>
      <input 
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your Name: {name}</p>
    </div>
  );
}
export default InputExample