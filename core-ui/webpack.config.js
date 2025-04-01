const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: "./src/Index.js",
  devServer: {
    port: 3003,
    historyApiFallback: true,
  },
  output: {
    publicPath: "http://localhost:3003/",
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
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "core_ui",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button/Button",
        "./Nav": "./src/components/Nav/Nav",
        "./Link": "./src/components/Link/Link",
        "./App.css": "./src/App.css", // Expose the CSS file
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^18.0.0",
          eager: true, // Change to true
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.0.0",
          eager: true, // Change to true
        },
        "react-router-dom": { singleton: true, requiredVersion: "^6.0.0" },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
};
