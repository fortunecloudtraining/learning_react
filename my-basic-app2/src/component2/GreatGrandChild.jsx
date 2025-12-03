import { useContext } from "react";
import MyContext from "./MyContext";

function GreatGrandChild() {
  const msg = useContext(MyContext); // direct access

  return <h3>GreatGrandChild Component → {msg}</h3>;
}

export default GreatGrandChild;
