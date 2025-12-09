import { useState, useMemo } from "react";

export default function WithUseMemo() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  // ✅ Runs ONLY when `number` changes
  const doubleNumber = useMemo(() => {
    return slowDouble(number);
  }, [number]);

  return (
    <div>
      <h2>With useMemo</h2>

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

// Same slow function
function slowDouble(num) {
  console.log("Slow function running...");
  for (let i = 0; i < 1000000000; i++) {} 
  return num * 2;
}
