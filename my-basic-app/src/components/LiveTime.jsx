import { useState, useEffect } from "react";

function LiveTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Current Time</h2>
      <h1>{time}</h1>
    </div>
  );
}

export default LiveTime;
