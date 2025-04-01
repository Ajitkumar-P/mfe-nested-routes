#!/bin/bash

echo "Creating Tailwind configuration..."
cat <<EOF > tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
EOF
