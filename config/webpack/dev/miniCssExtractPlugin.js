const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getMiniCssExtractPlugin(){
    return new MiniCssExtractPlugin({
        filename: 'css/[name].bundle.css',
        chunkFilename: 'css/[name].bundle.css'
    });
}

module.exports = getMiniCssExtractPlugin;