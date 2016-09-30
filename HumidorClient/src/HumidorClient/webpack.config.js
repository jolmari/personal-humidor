/// <binding ProjectOpened='Watch - Development, Cold' />
var webpack = require("webpack");
var extractTextPlugin = require("extract-text-webpack-plugin");
var webpackNotifierPlugin = require("webpack-notifier");
var path = require("path");

var appRootDir = path.resolve(__dirname, "Scripts");
var wwwRootDir = path.resolve(__dirname, "wwwroot");

var distDir = path.resolve(wwwRootDir, "dist");

module.exports = {
    entry: {
        "polyfills": path.resolve(appRootDir, "polyfills"),
        "vendor": path.resolve(appRootDir, "vendor"),
        "app": path.resolve(appRootDir, "main")
    },

    // This config is broken. Need to get rid of the proxying and set up this kind of setup
    // http://blog.2mas.xyz/react-hot-load-and-asp-net-5/
    devServer: {
        port: 8080,
        proxy: {
            "/": {
                target: "http://localhost:8000/",
                secure: false
            }
        }
    },

    output: {
        path: distDir,
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
                test: /\.(png|jpe?g|gif|ico)$/,
                loader: "file?name=assets/[name].[hash].[ext]"
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: "url-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: "raw-loader!sass-loader"
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
        new webpackNotifierPlugin(),
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