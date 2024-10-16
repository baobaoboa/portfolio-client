import React from "react";
import ReactDOM from "react-dom/client";

// # ~ ~ ~ ~ ~ # # ~ ~ ~ ~ ~ # CSS # ~ ~ ~ ~ ~ # # ~ ~ ~ ~ ~ # //
import "./index.css";

// # ~ ~ ~ ~ ~ # # ~ ~ ~ ~ ~ # PAGE # ~ ~ ~ ~ ~ # # ~ ~ ~ ~ ~ # //
import Portfolio from "./Portfolio";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
