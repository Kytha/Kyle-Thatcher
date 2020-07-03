const path = require("path");
const isProduction = process.env.NODE_ENV === "production";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const ModuleConcatenationPlugin = require("webpack").optimize
  .ModuleConcatenationPlugin;

const outputDirectory = "dist";

module.exports = {
  devtool: "",
  mode: isProduction ? "production" : "development",
  watchOptions: {
    ignored: /public/,
  },
  entry: {
    index: [
      path.resolve(__dirname, "./src/index.scss"),
      path.resolve(__dirname, "./src/index.js"),
    ],
  },
  output: {
    path: path.resolve(__dirname, outputDirectory),
    filename: isProduction ? "[name].[hash].js" : "[name].js",
    chunkFilename: isProduction ? "[id].[hash].js" : "[id].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new ModuleConcatenationPlugin(),
    new CleanWebpackPlugin(),
    new MinifyPlugin(),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new MiniCssExtractPlugin({
      filename: isProduction ? "[name].[hash].css" : "[name].css",
    }),
  ],
};
