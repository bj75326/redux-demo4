/**
 * Created by jibin on 17/8/24.
 */

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, './test/dist');

module.exports = {

    entry: {
        index: ["./test/testInput/entry.js"],
        common: [
            "react",
            "react-dom"
        ]
    },

    output: {
        path: BUILD_PATH,
        publicPath: './test/dist',
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash:5].js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /^node_modules$/,
                loader: 'babel-loader'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: "common", filename: "common.bundle.js"}),

        new HtmlWebpackPlugin({
            filename: '../../index.html',
            template: './test/testInput/tpl/index.html',
            inject: 'body',
            hash: true,
        })
    ]
}
