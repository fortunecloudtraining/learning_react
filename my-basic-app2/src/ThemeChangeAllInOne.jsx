// ThemeChangeAllInOne.jsx
import React, { createContext, useContext, useState } from "react";

// 1️⃣ Create Context
const ThemeContext = createContext();

function ThemeChangeAllInOne() {
  // 2️⃣ Theme state (shared to all components)
  const [theme, setTheme] = useState("light");

  // Toggle function
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    // 3️⃣ Provide theme + toggle function to all components
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemedContainer>
        <h2>All In One Theme Change Example</h2>
        <ThemeButton />
        <Content />
      </ThemedContainer>
    </ThemeContext.Provider>
  );
}

// 4️⃣ Container that changes background based on theme
function ThemedContainer({ children }) {
  const { theme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "white" : "#222",
    color: theme === "light" ? "black" : "white",
    minHeight: "100vh",
    padding: "30px",
  };

  return <div style={styles}>{children}</div>;
}

// 5️⃣ Button component to toggle the theme
function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "8px 16px",
        marginBottom: "20px",
        cursor: "pointer",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

// 6️⃣ Component showing content based on theme
function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <h3>
      Current Theme:{" "}
      <span style={{ color: theme === "light" ? "blue" : "yellow" }}>
        {theme.toUpperCase()}
      </span>
    </h3>
  );
}

export default ThemeChangeAllInOne;
