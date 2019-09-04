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

module.exports = ({rootDir, template, entry}) => {
    return {
        mode: 'production',

        stats: {children: false},

        entry: ['raf/polyfill', 'whatwg-fetch', entry],

        output: {
            path: rootDir + '/dist',
            filename: 'js/[name]-[hash:8].js',
        },

        resolve: {
            extensions: [ '.tsx', '.ts', '.js', '.scss' ]
        },

        // node: {
        //     fs: 'empty'
        // },
        //
        // externals: [
        //     {
        //         './cptable': 'var cptable'
        //     },
        //     {
        //         './jszip': 'jszip'
        //     }
        // ],

        module: webpackModule,

        optimization: optimization,

        plugins: [
            new CleanWebpackPlugin(),
            getCopyPlugin(rootDir),
            getMiniCssExtractPlugin(),
            new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
            new HtmlWebpackPlugin({
                template: template,
            }),
        ],
    }
};
