var webpack = require("webpack");
var extractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

var rootDir = path.resolve(__dirname, "..");

module.exports = {
        entry: {
            "polyfills": path.resolve(rootDir, "polyfills.ts"),
            "vendor": path.resolve(rootDir, "vendor"),
            "app": path.resolve(rootDir, "main")
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
                    include: path.resolve(rootDir, "src", "app"),
                    loader: "raw"
                }
            ]
        },

        plugins: [
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