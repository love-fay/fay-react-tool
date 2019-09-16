/**
 * Created by feichongzheng on 16/12/7.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpackModule = require('./module');
const getCopyPlugin = require('./copyPlugin');
const pwaPlugin = require('../pwaPlugin');
const getMiniCssExtractPlugin = require('./miniCssExtractPlugin');
const optimization = require('./optimization');
const path = require('path');

module.exports = ({rootDir, template, entry}) => {
    return {
        mode: 'production',

        stats: {children: false},

        entry: ['raf/polyfill', 'whatwg-fetch', path.join(rootDir, 'node_modules/@fay-react/tool/config/sw/registry.js'), entry],

        output: {
            path: rootDir + '/dist',
            filename: 'js/[name]-[contenthash:8].js',
        },

        resolve: {
            extensions: [ '.tsx', '.ts', '.js', '.scss' ]
        },

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
            pwaPlugin
        ],
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
    }
};
