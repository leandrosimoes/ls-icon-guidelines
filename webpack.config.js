const path = require("path")

module.exports = {
  mode: "production",
  entry: "./src/ls-icon-guidelines.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "ls-icon-guidelines.min.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}
