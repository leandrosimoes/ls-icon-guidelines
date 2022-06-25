const path = require("path")

const defualtConfig = {
  mode: "production",
  entry: "./src/ls-icon-guidelines.js",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}

const distConfig = {
  ...defualtConfig,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "ls-icon-guidelines.min.js",
  },
}

const docsConfig = {
  ...defualtConfig,
  output: {
    path: path.resolve(__dirname, "docs/js"),
    filename: "ls-icon-guidelines.min.js",
  },
}

module.exports = [
  distConfig,
  docsConfig,
]