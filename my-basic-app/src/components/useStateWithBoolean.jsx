import { useState } from "react";

function ToggleExample() {
  const [show, setShow] = useState(true);

  return (
    <div className="container">
        <h2>Toggle Example</h2>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Text
      </button>

      {show && <p>This is visible</p>}
    </div>
  );
}
export default ToggleExample