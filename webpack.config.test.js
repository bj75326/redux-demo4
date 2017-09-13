var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, './test/dist');

module.exports = {

    entry: {
        index: ['./test/webpackAsync/entry.js'],
        util: ['./test/webpackAsync/util-sync.js']
    },
    output: {
        path: BUILD_PATH,
        publicPath: './test/dist/',
        filename: '[name].[chunkhash:5].js'
    },
    /*
    resolve: {
        extensions: ['', '.js', '.css', '.html']
    },*/
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
        new webpack.optimize.CommonsChunkPlugin('common'),

        new HtmlWebpackPlugin({
            chunks: ['common', 'util', 'index'],
            filename: '../../index.html',
            template: './test/webpackAsync/tpl/index.html',
            inject: true
        })
    ]
};



