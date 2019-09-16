const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getMiniCssExtractPlugin(){
    return new MiniCssExtractPlugin({
        filename: 'css/[name]-[contenthash:8].css',
        chunkFilename: 'css/[name]-[contenthash:8].css'
    });
}

module.exports = getMiniCssExtractPlugin;