"use strict";

const path = require("path");
var appRootDir = path.resolve(__dirname, "..", "Scripts");

module.exports = {
    devtool: "inline-source-map",
    module: {
        preLoaders: [
            { exclude: /node_modules/, loader: "tslint", test: /\.ts$/ }
        ],
        loaders: [
            { loader: "raw", test: /\.(css|scss|html)$/ },
            { exclude: /node_modules/, loader: "ts", test: /\.ts$/ }
        ],
        resolve: {
            extensions: ["", ".js", ".ts"],
            modulesDirectories: ["node_modules"],
            root: appRootDir
        },
        tslint: {
            emitErrors: true
        }
    }
};

