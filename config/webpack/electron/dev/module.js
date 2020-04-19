const babelOptions = require('../../../babel/dev/config');

module.exports = {
    rules: [
        {
            test: /\.tsx?$|\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader?cacheDirectory',
                options: babelOptions,
            },
        },
        {
            test: /\.node$/,
            use: 'node-loader'
        }
    ],
};