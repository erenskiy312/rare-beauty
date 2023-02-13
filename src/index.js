import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Artikul1 from "./components/Artikul1/Artikul1";
import "./Artikul.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Artikul1 />
  </React.StrictMode>
);
