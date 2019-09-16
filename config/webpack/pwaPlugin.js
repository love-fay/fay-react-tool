const workboxPlugin = require('workbox-webpack-plugin');

module.exports = new workboxPlugin.GenerateSW({
    swDest: 'sw.js',
    clientsClaim: true,
    skipWaiting: true,
    importWorkboxFrom: 'local'
});