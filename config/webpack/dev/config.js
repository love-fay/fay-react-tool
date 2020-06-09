/**
 * Created by feichongzheng on 16/12/7.
 */
const webpackModule = require('./module');
const optimization = require('./optimization');
const getServer = require('./server');
const getPlugins = require('./plugins');
const path = require('path');
const {getPublicPathWithoutStartAndEndForwardSlash} = require('../../publicPath');

module.exports = ({rootDir, port = '8000', template, entry, https=false, pwaEnable=false, pwa}) => {
    const publicPathWithoutStartAndEndForwardSlash = getPublicPathWithoutStartAndEndForwardSlash();
    const publicPath = publicPathWithoutStartAndEndForwardSlash ? '/' + publicPathWithoutStartAndEndForwardSlash + '/' : '';
    return {
        mode: 'development',
        entry: [
            "core-js/stable",
            "regenerator-runtime/runtime",
            'raf/polyfill',
            'whatwg-fetch',
            path.join(rootDir, 'node_modules/@fay-react/tool/pollyfills/custom-event.js'),
            path.join(rootDir, 'node_modules/@fay-react/tool/config/sw/'+(pwaEnable ? 'registry.js':'unRegistry.js')),
            entry
        ],
        output: {
            path: path.join(rootDir, 'public'),
            filename: 'js/[name].bundle.js',
            publicPath
        },

        module: webpackModule,

        optimization: optimization,

        resolve: {
            extensions: [ '.tsx', '.ts', '.js', '.scss' ],
            alias: {
                '@': path.resolve(rootDir, 'src'),
            }
        },

        plugins: getPlugins({rootDir, template, pwaEnable, pwa}),

        devtool: 'inline-source-map',

        devServer: getServer(rootDir, port, entry, https),
    };
};