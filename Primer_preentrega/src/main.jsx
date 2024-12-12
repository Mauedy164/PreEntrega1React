import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Navbar } from "./Navbar";
import './styles.css';
import { ItemListContainer } from "./ItemListContainer";

createRoot(document.getElementById("root")).render(
  <>
  <Navbar/>
  <ItemListContainer greeting="Bienvenido a Cero Tolerancia" />
  </>
);
