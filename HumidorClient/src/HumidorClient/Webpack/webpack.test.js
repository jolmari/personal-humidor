"use strict";

const path = require("path");

module.exports = {
    devtool: "inline-source-map",

    module: {
        loaders: [
            {
                exclude: /node_modules/,
                test: /\.ts$/,
                loaders: ["awesome-typescript-loader", "angular2-template-loader"]
            },
            {
                test: /\.(css|scss|html)$/,
                loader: "raw"
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".ts"],
        modulesDirectories: ["node_modules"],
        root: path.resolve("Scripts")
    },
    stats: {
        errorDetails: true
    }
};

