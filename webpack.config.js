// webpack.config.js
const path = require("path");

module.exports = {
  entry: {
    content: "./src/content.js",
    worker: "./src/worker.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devtool: "source-map",
};
