import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import Navbar from "./Navbar";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
