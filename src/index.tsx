import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import TheHawkans from "./TheHawkans";
import "./style.css"

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <Router>
    <TheHawkans />
  </Router>,
);
