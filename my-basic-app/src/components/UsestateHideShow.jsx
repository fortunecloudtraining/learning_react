import { useState } from "react";

function HideShow() {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="container mt-5">

      <h2 className="mb-3">Show / Hide Password Example</h2>

      {/* Password Input */}
      <input
        type={showPass ? "text" : "password"}
        className="form-control w-50"
        placeholder="Enter password"
      />

      {/* Toggle Button */}
      <button
        className="btn btn-warning mt-3"
        onClick={() => setShowPass(!showPass)}
      >
        {showPass ? "Hide Password" : "Show Password"}
      </button>

    </div>
  );
}

export default HideShow;
