import GreatGrandChild from "./GreatGrandChild";

function GrandChild() {
  return (
    <div>
      <h3>GrandChild Component</h3>
      <GreatGrandChild />
    </div>
  );
}

export default GrandChild;

// // GrandChild.jsx
// import { useContext } from "react";
// import MyContext from "./MyContext";
// import GreatGrandChild from "./GreatGrandChild";

// function GrandChild() {
//   const msg = useContext(MyContext);  // 📌 Get message here

//   return (
//     <div>
//       <h3>GrandChild Component → {msg}</h3>
//       <GreatGrandChild/>
//     </div>
//   );
// }

// export default GrandChild;

