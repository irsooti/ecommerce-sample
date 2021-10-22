import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(
  // <React.StrictMode>   //HO DISABILITATO LA STRICT MODE PERCHE' MI ESEGUE IL SET STATE DUE VOLTE, CAUSANDO ANOMALIE SUL COUNTER
  <App />,
  // </React.StrictMode>,
  document.getElementById("root")
);
