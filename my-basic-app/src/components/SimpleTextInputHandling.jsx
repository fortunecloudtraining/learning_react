import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // page reload टाळतो

    // ---- Validation ----
    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    if (name.trim().length < 3) {
      setError("Name must be at least 3 characters");
      return;
    }

    // Clear previous errors
    setError("");

    alert("Your name: " + name);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "300px" }}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(a) => {
          setName(a.target.value);
          setError(""); // typing करताना error clear
        }}
        style={{
          border: error ? "1px solid red" : "1px solid #ccc",
          padding: "8px",
          width: "100%",
        }}
      />

      {/* Error message */}
      {error && (
        <p style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
          {error}
        </p>
      )}

      <button type="submit" style={{ marginTop: "10px" }}>
        Submit
      </button>
    </form>
  );
}

export default SimpleForm;
