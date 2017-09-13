/**
 * Created by jibin on 17/8/23.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, './test/dist');

module.exports = {

    entry: {
        index: ["./test/routerAsync/entry.js"],
        common: [
            "react",
            "react-dom",
            "react-router-dom",
            "redux",
            "react-redux"
        ]
    },

    output: {
        path: BUILD_PATH,
        publicPath: './test/dist/',
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash:5].js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [
                    /^node_modules$/,
                    /containers\/([^/]+)\/?([^/]*)\.js?$/
                ],
                loader: 'babel-loader'
            },
            {
                test: /containers\/([^/]+)\/?([^/]*)\.js?$/,
                loaders: ['bundle-loader?lazy', 'babel-loader']
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: "common", filename: "common.bundle.js"}),

        new HtmlWebpackPlugin({
            filename: '../../index.html',
            template: './test/routerAsync/tpl/index.html',
            inject: 'body',
            hash: true,
        })
    ]

};


