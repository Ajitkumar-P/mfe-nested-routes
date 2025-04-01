#!/bin/bash

echo "Creating basic React entry point..."
mkdir -p src/components
cat <<EOF > src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
EOF

# Create sample App component
cat <<EOF > src/App.js
import React from "react";
import "./App.css";

const App = () => <h1 className="text-blue-500 text-center">Welcome to $CHILD_APP_NAME on Port $PORT</h1>;

export default App;
EOF

# Create Tailwind CSS file
cat <<EOF > src/App.css
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF
