const TerserPlugin = require('terser-webpack-plugin');
const SplitChunks = require('../splitChunks');

module.exports = {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    minimizer: [new TerserPlugin()],
    splitChunks:SplitChunks
};