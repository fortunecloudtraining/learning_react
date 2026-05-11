import axios from "axios";
import { useState } from "react";

function AxiosExCreateUser() {
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/users", {
        name: name,
      });

      console.log("Created:", res.data);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleSubmit}>Create User</button>
    </div>
  );
}

export default AxiosExCreateUser;
