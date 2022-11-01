import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RobotContextProvider } from "./context/RobotContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RobotContextProvider>
      <App />
    </RobotContextProvider>
  </React.StrictMode>
);
