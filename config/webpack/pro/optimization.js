const TerserPlugin = require('terser-webpack-plugin');
const SplitChunks = require('../splitChunks');

module.exports = {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    minimizer: [new TerserPlugin({
        terserOptions: {
            compress: {
                drop_console: false,
            },
        },
    })],
    splitChunks:SplitChunks
};