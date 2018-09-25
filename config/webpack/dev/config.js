/**
 * Created by feichongzheng on 16/12/7.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const path = require('path');
const webpackModule = require('./module');
const getProxy = require('./proxy');
const getCopyPlugin = require('./copyPlugin');
const getMiniCssExtractPlugin = require('./miniCssExtractPlugin');
const optimization = require('./optimization');

module.exports = ({rootDir, port = '8000'}) => {
    return {
        mode: 'development',
        entry: ['@babel/polyfill', 'raf/polyfill', 'whatwg-fetch', rootDir + '/app/index.js'],
        output: {
            path: rootDir + '/public',
            filename: 'js/[name].[hash:8].bundle.js'
        },

        module: webpackModule,

        optimization: optimization,

        plugins: [
            new CleanPlugin(['public'], {
                'root': rootDir,
                'verbose': true,
                'dry': false,
            }),
            getCopyPlugin(rootDir),
            getMiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                template: rootDir + '/node_modules/rj-tool/config/index.html',
            }),
            new webpack.HotModuleReplacementPlugin(),
        ],

        devtool: 'source-map',

        devServer: {
            contentBase: path.join(rootDir, 'public'),
            compress: false,
            host: "0.0.0.0",
            port: port,
            historyApiFallback: true,
            inline: true,
            hot: true,
            hotOnly: true,
            proxy: getProxy(rootDir),
            stats: {children: false}
        },
    };
};