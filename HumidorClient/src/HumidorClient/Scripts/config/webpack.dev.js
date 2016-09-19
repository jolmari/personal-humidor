var webpackMerge = require("webpack-merge");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonConfig = require("./webpack.common.js");
var path = require("path");

var outputRootDir = path.resolve(__dirname, "../../wwwroot");

module.exports = webpackMerge(commonConfig, {
    devtool: "cheap-module-eval-source-map",

    output: {
        path: path.resolve(outputRootDir, "dist"),
        publicPath: "",
        filename: "[name].js",
        chunkFilename: "[id].chunk.js"
    },

    plugins: [
      new ExtractTextPlugin("[name].css")
    ],

    devServer: {
        historyApiFallback: true,
        stats: "minimal"
    }
});
