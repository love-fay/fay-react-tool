/**
 * Created by feichongzheng on 16/12/7.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpackModule = require('./module');
const getCopyPlugin = require('./copyPlugin');
const getMiniCssExtractPlugin = require('./miniCssExtractPlugin');
const optimization = require('./optimization');
const getServer = require('./server');

module.exports = ({rootDir, port = '8000', template, entry, https=false}) => {
    return {
        mode: 'development',
        entry: ['raf/polyfill', 'whatwg-fetch', entry],
        output: {
            path: rootDir + '/public',
            filename: 'js/[name].bundle.js'
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
            new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
            new HtmlWebpackPlugin({
                template: template,
            }),
            new webpack.HotModuleReplacementPlugin(),
        ],

        devtool: 'inline-source-map',

        devServer: getServer(rootDir, port, entry, https),
    };
};