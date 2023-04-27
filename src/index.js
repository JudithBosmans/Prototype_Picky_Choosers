import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PollList from "./Filter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PollList />
  </React.StrictMode>
);
