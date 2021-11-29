import React from "react";
import ReactDOM from "react-dom";

// css
import "./styles/styles.css";

// router
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
