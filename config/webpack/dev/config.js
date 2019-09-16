/**
 * Created by feichongzheng on 16/12/7.
 */
const webpackModule = require('./module');
const optimization = require('./optimization');
const getServer = require('./server');
const getPlugins = require('./plugins');

module.exports = ({rootDir, port = '8000', template, entry, https=false, pwa=false}) => {
    return {
        mode: 'development',
        entry: ['raf/polyfill', 'whatwg-fetch', path.join(rootDir, 'node_modules/@fay-react/tool/config/sw/'+(pwa ? 'registry.js':'unRegistry.js')), entry],
        output: {
            path: rootDir + '/public',
            filename: 'js/[name].bundle.js'
        },

        module: webpackModule,

        optimization: optimization,

        resolve: {
            extensions: [ '.tsx', '.ts', '.js', '.scss' ]
        },

        plugins: getPlugins({rootDir, template, pwa}),

        devtool: 'inline-source-map',

        devServer: getServer(rootDir, port, entry, https),

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
    };
};