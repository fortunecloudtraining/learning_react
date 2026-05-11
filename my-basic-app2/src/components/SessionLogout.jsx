import { useEffect, useState } from "react";

export default function SessionLogout() {
  const [user, setUser] = useState("");
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes = 120 seconds

  // ✅ On page load, check sessionStorage
  useEffect(() => {
    const savedUser = sessionStorage.getItem("user");
    const savedTime = sessionStorage.getItem("time");

    if (savedUser && savedTime) {
      setUser(savedUser);
      setTimeLeft(Number(savedTime));
    }
  }, []);

  // ✅ Timer countdown logic
  useEffect(() => {
    if (!user) return;

    if (timeLeft === 0) {
      logout(); // auto logout
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        sessionStorage.setItem("time", prev - 1); // save timer
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [user, timeLeft]);

  // ✅ Login Function
  const login = () => {
    if (!user) return alert("Enter Name");

    sessionStorage.setItem("user", user);
    sessionStorage.setItem("time", 120); // 2 min
    setTimeLeft(120);
  };

  // ✅ Logout Function (Manual + Auto)
  const logout = () => {
    sessionStorage.clear();
    setUser("");
    setTimeLeft(120);
    alert("Session Expired! Logged Out.");
  };

  return (
    <div className="container mt-5 col-md-6">
      <div className="card shadow">
        <div className="card-header bg-primary text-white text-center">
          <h4>⏳ Auto Logout using sessionStorage</h4>
        </div>

        <div className="card-body text-center">
          {!sessionStorage.getItem("user") ? (
            <>
              <input
                className="form-control mb-2"
                placeholder="Enter Username"
                onChange={(e) => setUser(e.target.value)}
              />
              <button className="btn btn-success w-100" onClick={login}>
                Login
              </button>
            </>
          ) : (
            <>
              <h5>Welcome: {sessionStorage.getItem("user")}</h5>
              <h6 className="text-danger">Auto Logout In: {timeLeft}s</h6>
              <button className="btn btn-danger mt-3" onClick={logout}>
                Logout Now
              </button>
            </>
          )}

          <hr />
          <p className="text-muted">
            ✅ Refresh → Session continues <br />
            ❌ Close Tab → Session destroyed <br />
            ⏳ After 2 minutes → Auto Logout
          </p>
        </div>
      </div>
    </div>
  );
}
