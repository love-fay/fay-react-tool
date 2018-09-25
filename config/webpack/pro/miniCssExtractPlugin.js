const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getMiniCssExtractPlugin(){
    return new MiniCssExtractPlugin({
        filename: 'css/[name].[hash].css',
        chunkFilename: 'css/[id].[hash].css'
    });
}

module.exports = getMiniCssExtractPlugin;