/**
 * Created by feichongzheng on 16/12/7.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
const webpackModule = require('./module');
const getProxy = require('./proxy');
const getCopyPlugin = require('./copyPlugin');
const getMiniCssExtractPlugin = require('./miniCssExtractPlugin');
const optimization = require('./optimization');

module.exports = ({rootDir, port = '8000', template, entry}) => {
    return {
        mode: 'development',
        entry: ['raf/polyfill', 'whatwg-fetch', entry],
        output: {
            path: rootDir + '/public',
            filename: 'js/[name].[hash:8].bundle.js'
        },

        module: webpackModule,

        optimization: optimization,

        resolve: {
            extensions: [ '.tsx', '.ts', '.js', '.scss' ]
        },

        // node: {
        //     fs: 'empty'
        // },

        // externals: [
        //     {
        //         './cptable': 'var cptable'
        //     },
        //     {
        //         './jszip': 'jszip'
        //     }
        // ],

        plugins: [
            new CleanWebpackPlugin(),
            getCopyPlugin(rootDir),
            getMiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                template: template,
            }),
            new webpack.HotModuleReplacementPlugin(),
        ],

        devtool: 'inline-source-map',

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