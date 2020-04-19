/**
 * Created by feichongzheng on 16/12/7.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpackModule = require('./module');
const getCopyPlugin = require('./copyPlugin');
const {getPWAPlugin} = require('../pwaPlugin');
const getMiniCssExtractPlugin = require('./miniCssExtractPlugin');
const optimization = require('./optimization');
const path = require('path');
const {getPublicPathWithoutStartAndEndForwardSlash} = require('../../publicPath');

module.exports = ({rootDir, template, entry, pwa}) => {
    const publicPathWithoutStartAndEndForwardSlash = getPublicPathWithoutStartAndEndForwardSlash();
    const publicPath = publicPathWithoutStartAndEndForwardSlash ? '/' + publicPathWithoutStartAndEndForwardSlash + '/' : '';

    return {
        mode: 'production',

        stats: {children: false},

        entry: [
            "core-js/stable",
            "regenerator-runtime/runtime",
            'raf/polyfill',
            'whatwg-fetch',
            path.join(rootDir, 'node_modules/@keystore/tool/pollyfills/custom-event.js'),
            path.join(rootDir, 'node_modules/@keystore/tool/config/sw/registry.js'),
            entry
        ],

        output: {
            path: path.join(rootDir, 'dist'),
            filename: 'js/[name]-[contenthash:8].js',
            publicPath
        },

        resolve: {
            extensions: [ '.tsx', '.ts', '.js', '.scss' ],
            alias: {
                '@': path.resolve(rootDir, 'src'),
            }
        },

        module: webpackModule,

        optimization: optimization,

        plugins: [
            new CleanWebpackPlugin(),
            getCopyPlugin(rootDir),
            new webpack.DefinePlugin({
                'process.env.PUBLIC_PATH': JSON.stringify(process.env.PUBLIC_PATH)
            }),
            getMiniCssExtractPlugin(),
            new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
            new HtmlWebpackPlugin({
                template: template,
                meta: {'version': new Date().toISOString()}
            }),
            getPWAPlugin(pwa)
        ],
    }
};
