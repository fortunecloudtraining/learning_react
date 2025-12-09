import { useEffect, useState } from "react";

export default function SessionDemo() {
  const [name, setName] = useState("");

  // ✅ Load data from sessionStorage when page loads
  useEffect(() => {
    const savedName = sessionStorage.getItem("student");
    if (savedName) setName(savedName);
  }, []);

  // ✅ Save to sessionStorage
  const saveName = () => {
    if (!name) return alert("Enter Name");
    sessionStorage.setItem("student", name);
    alert("Saved in sessionStorage");
  };

  // ✅ Remove from sessionStorage
  const clearName = () => {
    sessionStorage.removeItem("student");
    setName("");
  };

  return (
    <div className="container mt-5 col-md-6">
      <div className="card shadow">
        <div className="card-header bg-success text-white text-center">
          <h4>✅ sessionStorage Demo</h4>
        </div>

        <div className="card-body">
          <input
            className="form-control mb-2"
            placeholder="Enter Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button onClick={saveName} className="btn btn-primary me-2">
            Save
          </button>

          <button onClick={clearName} className="btn btn-danger">
            Remove
          </button>

          <h5 className="mt-3">Stored Name: {name}</h5>

          <hr />

          <p className="text-muted">
            🔁 Refresh page → Data stays <br />
            ❌ Close tab → Data is deleted
          </p>
        </div>
      </div>
    </div>
  );
}
