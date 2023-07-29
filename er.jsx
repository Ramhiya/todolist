import React, { useState } from "react";
import "./App.css";

function App() {
  const [isBackgroundDark, setIsBackgroundDark] = useState(false);

  const handleToggle = () => {
    setIsBackgroundDark((prevState) => !prevState);
  };

  const backgroundColor = isBackgroundDark ? "#333" : "#fff";
  const textColor = isBackgroundDark ? "#fff" : "#333";

  return (
    <div
      className="App"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <h1>Toggle Background Color</h1>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}

export default App;
