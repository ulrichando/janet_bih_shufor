import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Homepage from "./Pages/HomePage";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  </React.StrictMode>
);
