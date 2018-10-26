/**
 * Created by feichongzheng on 16/12/7.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const webpackModule = require('./module');
const getCopyPlugin = require('./copyPlugin');
const getMiniCssExtractPlugin = require('./miniCssExtractPlugin');
const optimization = require('./optimization');

module.exports = ({rootDir}) => {
    return {
        mode: 'production',

        stats: {children: false},

        entry: ['@babel/polyfill', 'raf/polyfill', 'whatwg-fetch', rootDir + '/app/index.js'],

        output: {
            path: rootDir + '/dist',
            filename: 'js/[name]-[hash:8].js',
        },

        module: webpackModule,

        optimization: optimization,

        plugins: [
            new CleanPlugin(['dist'], {
                'root': rootDir,
                'verbose': true,
                'dry': false,
            }),
            getCopyPlugin(rootDir),
            getMiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                template: rootDir + '/node_modules/fay-react-tool/config/index.html',
            }),
        ],
    }
};
