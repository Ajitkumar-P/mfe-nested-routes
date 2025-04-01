#!/bin/bash

echo "Creating Webpack configuration..."
cat <<EOF > webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    port: $PORT,
    historyApiFallback: true,
  },
  output: {
    publicPath: "http://localhost:$PORT/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      }
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "$REMOTE_NAME",
      filename: "remoteEntry.js",
      exposes: {
        './App': './src/App',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^19.0.0",
          eager: true
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^19.0.0",
          eager: true
        },
        "react-router-dom": { singleton: true, requiredVersion: "^7.0.0" }
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
};
EOF
