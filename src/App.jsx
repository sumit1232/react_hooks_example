import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./App.css"
function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
  <>
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", height: "100vh" }}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
    </>
  );
}

export default App;
