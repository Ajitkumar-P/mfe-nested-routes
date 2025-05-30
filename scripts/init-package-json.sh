#!/bin/bash

echo "Initializing package.json..."
cat <<EOF > package.json
{
  "name": "$CHILD_APP_NAME",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "webpack serve --mode development --open",
    "build": "webpack --mode production",
    "tailwindcss": "tailwindcss"
  },
  "dependencies": {
    "@babel/core": "^7.26.10",
    "@babel/preset-env": "^7.26.9",
    "@babel/preset-react": "^7.26.3",
    "@tailwindcss/postcss": "^4.0.17",
    "babel-loader": "^10.0.0",
    "prop-types": "^15.8.1",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.4.1",
    "tailwindcss": "^4.0.17"
  },
  "devDependencies": {
    "@types/react": "^19.0.12",
    "@types/react-dom": "^19.0.4",
    "autoprefixer": "^10.4.21",
    "css-loader": "^7.1.2",
    "html-webpack-plugin": "^5.6.3",
    "postcss": "^8.5.3",
    "postcss-loader": "^8.1.1",
    "style-loader": "^4.0.0",
    "webpack": "^5.98.0",
    "webpack-cli": "^6.0.1",
    "webpack-dev-server": "^5.2.0"
  }
}
EOF
