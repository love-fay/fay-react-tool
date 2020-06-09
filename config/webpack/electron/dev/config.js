/**
 * Created by feichongzheng on 16/12/7.
 */
const webpack = require('webpack');
const getCopyPlugin = require('./copyPlugin');
const webpackModule = require('./module');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = ({rootDir, port = '8000', entry}) =>
({
    mode: 'development',

    target: 'electron-main',

    entry: [entry],

    output: {
        path: rootDir + '/package/dev/dist',
        filename: 'index.js'
    },

    module: webpackModule,

    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },

    externals: {
        ['@fay-react/node-device']: 'commonjs @fay-react/node-device',
        ['@fay-react/node-scard']: 'commonjs @fay-react/node-scard',
    },

    plugins: [
        new CleanWebpackPlugin(),
        getCopyPlugin(rootDir),
        new webpack.DefinePlugin({
            'process.env.WEB': JSON.stringify(process.env.WEB)
        })
    ],

    devtool: 'inline-source-map',
});