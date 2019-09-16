const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const getCopyPlugin = require('./copyPlugin');
const getMiniCssExtractPlugin = require('./miniCssExtractPlugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pwaPlugin = require('../pwaPlugin');

function getPlugins({rootDir, template, pwa}) {
    const plugins = [
        new CleanWebpackPlugin(),
        getCopyPlugin(rootDir),
        getMiniCssExtractPlugin(),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
        new HtmlWebpackPlugin({
            template: template,
        }),
        new webpack.HotModuleReplacementPlugin(),

    ];
    pwa && plugins.push(pwaPlugin);
    return plugins;
}

module.exports = getPlugins;