import React from "react";

import "./App.css";

const App = () => {
  const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  return (
    <div className="App" theme={theme}>
      <h1>gh-actions-react-cd</h1>
    </div>
  );
};

export default App;
