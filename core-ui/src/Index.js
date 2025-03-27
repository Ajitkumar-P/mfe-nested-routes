import React from "react";
import { createRoot } from "react-dom/client";  // ✅ Use createRoot
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
