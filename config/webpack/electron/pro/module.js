const babelOptions = require('../../../babel/pro/config');

module.exports = {
    rules: [
        {
            test: /\.tsx?$|\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: babelOptions,
            },
        },
        {
            test: /\.node$/,
            use: 'node-loader'
        },
        {
            test: /\.gz$/,
            enforce: 'pre',
            use: 'gzip-loader',
        }
    ],
};