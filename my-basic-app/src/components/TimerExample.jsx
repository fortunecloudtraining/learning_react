import { useState, useEffect } from "react";

function TimerExample() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (isRunning) {
      // 🔵 Start timer when isRunning becomes true
      timerId = setInterval(() => {
        setSeconds(prev => prev + 1); // update seconds
      }, 1000); // run every 1 second
    }

    // 🔴 Cleanup (very important!)
    // Runs when component unmounts OR isRunning changes
    return () => {
      clearInterval(timerId);
    };
  }, [isRunning]); 
  // ▶ useEffect runs again only when isRunning changes

  return (
    <div className="container mt-4">
      <h2>Timer: {seconds} sec</h2>

      <button 
        className="btn btn-success mx-2"
        onClick={() => setIsRunning(true)}
      >
        Start
      </button>

      <button 
        className="btn btn-danger mx-2"
        onClick={() => setIsRunning(false)}
      >
        Stop
      </button>

      <button 
        className="btn btn-warning mx-2"
        onClick={() => { setSeconds(0); }}
      >
        Reset
      </button>
    </div>
  );
}

export default TimerExample;


// import { useState, useEffect } from "react";

// function TimerExample() {
//   const [seconds, setSeconds] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let timerId;

//     console.log("🟡 useEffect RUNNING. isRunning =", isRunning);

//     if (isRunning) {
//       console.log("🟢 Timer STARTED");

//       timerId = setInterval(() => {
//         console.log("⏳ Timer TICK:", seconds + 1); // next second
//         setSeconds(prev => prev + 1);
//       }, 1000);
//     }

//     // Cleanup
//     return () => {
//       if (timerId) {
//         console.log("🔴 Cleanup: Timer STOPPED");
//         clearInterval(timerId);
//       } else {
//         console.log("⚪ No timer to clean (isRunning was false)");
//       }
//     };
//   }, [isRunning]); // Effect runs whenever isRunning changes

//   return (
//     <div className="container mt-4">
//       <h2>Timer: {seconds} sec</h2>

//       <button 
//         className="btn btn-success mx-2"
//         onClick={() => setIsRunning(true)}
//       >
//         Start
//       </button>

//       <button 
//         className="btn btn-danger mx-2"
//         onClick={() => setIsRunning(false)}
//       >
//         Stop
//       </button>

//       <button 
//         className="btn btn-warning mx-2"
//         onClick={() => { 
//           console.log("🔄 Timer RESET");
//           setSeconds(0); 
//         }}
//       >
//         Reset
//       </button>
//     </div>
//   );
// }

// export default TimerExample;
