const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    minimizer: [new TerserPlugin()],
};