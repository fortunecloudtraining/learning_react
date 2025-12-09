import { useState } from "react";

export default function WithoutUseMemo() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  // ❌ Slow calculation (simulated)
  const doubleNumber = slowDouble(number);

  return (
    <div>
      <h2>Without useMemo</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here…"
      />

      <h3>Double: {doubleNumber}</h3>
    </div>
  );
}

// ❌ Slow function (pretend heavy calculation)
function slowDouble(num) {
  console.log("Slow function running...");
  for (let i = 0; i < 1000000000; i++) {} // heavy loop
  return num * 2;
}
