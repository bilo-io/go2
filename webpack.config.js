var webpack = require('webpack');
var path = require('path');

var DIST = path.resolve(__dirname, 'dist/');
var SRC = path.resolve(__dirname, 'src/');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: SRC + '/index.js',
    output: {
        path: DIST,
        publicPath: '/',
        filename: 'app.js',
        sourceMapFilename: '[file].map',
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
            exclude: /node_modules/
        }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file-loader?name=assets/[name].[ext]',
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    },
    devtool: 'source-map'
};

module.exports = config;