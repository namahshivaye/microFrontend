const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, //ask babel to compile any file with extension .mjs or.js
        exclude: /node_modules/, // do not run babel on node module directory
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"], // to transfer any react related code or advansed ES to ES5
            plugins: ["@babel/plugin-transform-runtime"], //Babel often inserts helper functions into the compiled output to support features that are not natively supported in all JavaScript environments. These helper functions can be quite common across different modules, leading to redundant code.The @babel/plugin-transform-runtime externalizes these helper functions, ensuring that they are only included once in your final bundle rather than duplicated in each module.
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
