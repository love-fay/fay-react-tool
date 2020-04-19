const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const getCopyPlugin = require('./copyPlugin');
const getMiniCssExtractPlugin = require('./miniCssExtractPlugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {getPWAPlugin} = require('../pwaPlugin');

function getPlugins({rootDir, template, pwaEnable, pwa}) {
    const plugins = [
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
        new webpack.HotModuleReplacementPlugin(),

    ];
    pwaEnable && plugins.push(getPWAPlugin(pwa));
    return plugins;
}

module.exports = getPlugins;