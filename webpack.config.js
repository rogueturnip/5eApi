const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const NodemonPlugin = require("nodemon-webpack-plugin");

const { NODE_ENV = "development" } = process.env;

module.exports = {
  entry: {
    server: "./src/server.ts",
  },
  output: {
    filename: "[name].bundle.js",
    // filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs",
  },
  mode: NODE_ENV,
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  externals: [nodeExternals()],
  watch: NODE_ENV === "development",
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [new CleanWebpackPlugin(), new NodemonPlugin()],
};
