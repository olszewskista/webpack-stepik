import React from "react";
import { createRoot } from "react-dom/client";
import Menu from "./components/Menu";
import data from "./data/recipes.json";

const root = createRoot(document.getElementById("root"))
root.render(<Menu recipes={data}/>)