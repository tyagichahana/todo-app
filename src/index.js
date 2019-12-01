import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./styles.css";

function Boot() {
  return (
    <div className="App">
      <nav className="nav-row">
        <div className="nav-col">Todo App</div>
      </nav>
      <App />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Boot />, rootElement);
