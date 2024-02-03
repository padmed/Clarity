// webpack.config.js
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    content: "./src/popup/content.js",
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
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/public/manifest.json",
          to: path.resolve(__dirname, "dist"),
        },
        {
          from: "./src/public/icons",
          to: path.resolve(__dirname, "dist/icons"),
        },
      ],
    }),
  ],
};
