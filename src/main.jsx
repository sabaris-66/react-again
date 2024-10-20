import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Hip from "./Greeting.jsx";
import Trial from "./trial.jsx";
import Person from "./person.jsx";
import Time from "./black.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Hip />
    <Trial />
    <Person />
  </StrictMode>
);
