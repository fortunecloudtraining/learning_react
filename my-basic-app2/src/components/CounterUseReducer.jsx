import { useReducer } from "react";
//const [state, dispatch] = useReducer(reducer, initialState);
// ---------------------------------------------------------
// 1️⃣ Reducer Function
// - It receives current state and action
// - It returns NEW UPDATED state
// ---------------------------------------------------------
function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 }; // Increase count

    case "DEC":
      return { count: state.count - 1 }; // Decrease count

    case "RESET":
      return { count: 0 }; // Reset count to 0

    default:
      return state; // If action type not found → return same state
  }
}

// ---------------------------------------------------------
// 2️⃣ Component using useReducer
// ---------------------------------------------------------
export default function CounterUseReducer() {
  // useReducer gives:
  // state     → current state value
  // dispatch  → function to send actions
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>Count: {state.count}</h2>

      {/* Sending action to reducer */}
      <button onClick={() => dispatch({ type: "INC" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "DEC" })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}
