var webpack = require("webpack");
var extractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

var appRootDir = path.resolve(__dirname, "Scripts");
var wwwRootDir = path.resolve(__dirname, "wwwroot");

module.exports = {
    entry: {
        "polyfills": path.resolve(appRootDir, "polyfills"),
        "vendor": path.resolve(appRootDir, "vendor"),
        "app": path.resolve(appRootDir, "main")
    },

    devServer: {
        contentBase: appRootDir,
        host: "localhost",
        port: 9000
    },

    output: {
        path: path.resolve(wwwRootDir, "dist"),
        publicPath: "",
        filename: "[name].js",
        chunkFilename: "[id].chunk.js"
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
                loader: "file?name=assets/[name].[hash].[ext]"
            },
            {
                test: /\.css$/,
                loader: extractTextPlugin.extract("style", "css?sourceMap")
            },
            {
                test: /\.css$/,
                include: path.resolve(appRootDir, "src", "app"),
                loader: "raw"
            }
        ]
    },

    plugins: [
        new extractTextPlugin("[name].css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["app", "vendor", "polyfills"]
        }),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery",
            jquery: "jquery"
        })
    ]
}