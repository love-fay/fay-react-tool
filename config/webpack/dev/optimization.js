const SplitChunks = require('../splitChunks');

module.exports = {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks:SplitChunks
};