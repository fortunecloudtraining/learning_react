// AllInOne.jsx
import React, { createContext, useContext } from "react";

// 1️⃣ Create Context
const MyContext = createContext();

function AllInOne() {
  // 2️⃣ Create values to share
  const name = "Anand";
  const age = 22;

  return (
    // 3️⃣ Provide name + age to all components below
    <MyContext.Provider value={{ name, age }}>
      <div style={{ padding: "20px", border: "2px solid black" }}>
        <h2>App Component</h2>
        <Child />
      </div>
    </MyContext.Provider>
  );
}

// 4️⃣ Child Component
function Child() {
  const { name } = useContext(MyContext); // get name only

  return (
    <div style={{ marginTop: "20px", border: "2px solid blue", padding: "15px" }}>
      <h3>Child Component</h3>
      <p>Name from Context: <b>{name}</b></p>

      <GrandChild />
    </div>
  );
}

// 5️⃣ GrandChild Component
function GrandChild() {
  const { name, age } = useContext(MyContext); // get both values

  return (
    <div style={{ marginTop: "20px", border: "2px solid green", padding: "15px" }}>
      <h3>GrandChild Component</h3>
      <p>Name: <b>{name}</b></p>
      <p>Age: <b>{age}</b></p>

      <GreatGrandChild />
    </div>
  );
}

// 6️⃣ GreatGrandChild Component
function GreatGrandChild() {
  const { age } = useContext(MyContext); // get only age

  return (
    <div style={{ marginTop: "20px", border: "2px solid red", padding: "15px" }}>
      <h3>GreatGrandChild Component</h3>
      <p>Age from Context: <b>{age}</b></p>
    </div>
  );
}

export default AllInOne;
