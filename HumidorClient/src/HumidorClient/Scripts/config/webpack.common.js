var Webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Path = require("path");

var RootDir = Path.resolve(__dirname, "..");

module.exports = {
    entry: {
        "polyfills": Path.resolve(RootDir, "polyfills.ts"),
        "vendor": Path.resolve(RootDir, "vendor"),
        "app": Path.resolve(RootDir, "main")
    },

    resolve: {
        extensions: ["", ".ts", ".js"]
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ["awesome-typescript-loader", "angular2-template-loader"]
            },
            {
                test: /\.html$/,
                loader: "html"
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loaders: "file?name=assets/[name].[hash].[ext]"
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css?sourceMap")
            },
            {
                test: /\.css$/,
                include: Path.resolve(RootDir, "src", "app"),
                loader: "raw"
            }
        ]
    },

    plugins: [
        new Webpack.optimize.CommonsChunkPlugin({
            name: ["app", "vendor", "polyfills"]
        }),
        new HtmlWebpackPlugin({
            template: Path.resolve(RootDir, "views/index.html")
        })
    ]
}