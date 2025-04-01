#!/bin/bash

echo "Creating PostCSS configuration..."
cat <<EOF > postcss.config.js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
EOF
