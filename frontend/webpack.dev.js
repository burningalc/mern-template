const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: [path.resolve(__dirname, "./src"), path.resolve(__dirname, "./public")],
    compress: true,
    watchContentBase: true,
    liveReload: true,
    historyApiFallback: true,
    port: 3000,
    hot: true,
    inline: true
  },
  devtool: "inline-source-map",
  plugins: [
    new Dotenv({
      path: ".env.development"
    })
  ]
});
