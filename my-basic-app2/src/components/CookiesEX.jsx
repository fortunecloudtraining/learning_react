import { useEffect, useState } from "react";

export default function CookiesEX() {
  // ✅ React state to show cookie value on screen
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  // ✅ Get cookie when page loads (after refresh also)
  useEffect(() => {
    const savedName = getCookie("student");
    if (savedName) {
      setName(savedName);
    }
  }, []);

  // ✅ SET COOKIE FUNCTION
  const setCookie = () => {
    if (!input) {
      alert("Enter name");
      return;
    }

    // cookie will expire after 1 day
    document.cookie = `student=${input}; expires=Tue, 02 Jun 2026 10:00:00 UTC UTC UTC; path=/`;

    setName(input); // update UI
    setInput("");  // clear textbox
  };

  // ✅ GET COOKIE FUNCTION
  const getCookie = (key) => {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
      const [k, v] = c.split("=");
      if (k === key) return v;
    }
    return "";
  };

  // ✅ DELETE COOKIE FUNCTION
  const deleteCookie = () => {
    document.cookie = "student=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    setName("");
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>🍪 Simple Cookies Demo</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Student Name"
      />

      <br /><br />

      <button onClick={setCookie}>Set Cookie</button>
      <button onClick={deleteCookie} style={{ marginLeft: 10 }}>
        Delete Cookie
      </button>

      <hr />

      <h3>Stored Cookie Value:</h3>
      <p>{name ? name : "No Cookie Found"}</p>

      <p>
        ✅ Refresh page → Cookie stays <br />
        ✅ Close browser → Cookie stays <br />
        ❌ Delete → Cookie removed
      </p>
    </div>
  );
}
