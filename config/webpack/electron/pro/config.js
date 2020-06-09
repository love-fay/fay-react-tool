/**
 * Created by feichongzheng on 16/12/7.
 */
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpackModule = require('./module');
const optimization = require('./optimization');
const getCopyPlugin = require('./copyPlugin');

module.exports = ({rootDir, entry}) => ({
    target: 'electron-main',

    mode: 'production',

    stats: {children: false},

    entry: [entry],

    output: {
        path: rootDir + '/package/pro/dist',
        filename: 'index.js',
    },

    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },

    externals: {
        ['@fay-react/node-device']: 'commonjs @fay-react/node-device',
        ['@fay-react/node-scard']: 'commonjs @fay-react/node-scard',
    },

    module: webpackModule,

    optimization: optimization,

    plugins: [
        new CleanWebpackPlugin(),
        getCopyPlugin(rootDir),
        new webpack.DefinePlugin({
            'process.env.WEB': JSON.stringify(process.env.WEB)
        })
    ],
});
