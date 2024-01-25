const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packagejson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new moduleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
      shared: ["react", "react-dom"], // these deps will be shared among all microfrontends and the modules will not be loaded multiple times

      // if we want to delegate the dependencies list to webpack then below way can be used
      // shared: packagejson.dependencies,
    }),
  ],
};
module.exports = merge(commonConfig, devConfig);
