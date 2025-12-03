import GreatGrandChild from "./GreatGrandChild";

function GrandChild({ message }) {
  return (
    <div>
      <h3>GrandChild Component</h3>
      <GreatGrandChild message={message} />
    </div>
  );
}

export default GrandChild;
