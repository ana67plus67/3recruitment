import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Roles } from "./components/Roles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Roles />
  </StrictMode>,
);
