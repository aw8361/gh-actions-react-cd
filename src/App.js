import React from "react";

import logo from "../public/logo.png";
import "./App.css";

const App = () => {
  const [theme, setTheme] = React.useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  const handleImageClick = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="App" theme={theme}>
      <img src={logo} draggable="false" onClick={handleImageClick} />
      <h1>gh-actions-react-cd</h1>
    </div>
  );
};

export default App;
