import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PokemonContainer from "./PokemonContainer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PokemonContainer />
  </StrictMode>,
);
