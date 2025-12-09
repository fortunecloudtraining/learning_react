import { useState, useCallback, memo } from "react";

// ✅ Child protected with memo (not React.memo)
const Child = memo(({ onClick }) => {
  console.log("✅ Child Rendered (WITH useCallback)");
  return <button onClick={onClick}>Child Button</button>;
});

export default function WithCallBackChild() {
  const [count, setCount] = useState(0);

  // ✅ Function created ONLY ONCE
  const increment = useCallback(() => {
    console.log("✅ increment function REUSED");
  }, []);

  console.log("🔄 Parent Rendered");

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Parent Button
      </button>

      <hr />

      <Child onClick={increment} />
    </>
  );
}
