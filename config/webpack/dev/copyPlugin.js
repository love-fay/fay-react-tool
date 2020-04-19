const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
let arr = [];

function getCopyPlugin(rootDir){
    try {
        arr.push({from: path.join(rootDir, '/package.json'), to: path.join(rootDir, '/public/')});
        const status = fs.statSync(path.join(rootDir, 'assets'));
        if(status.isDirectory()){
            arr.push({from: path.join(rootDir, '/assets/**/*.json'), to: path.join(rootDir, '/public/')});
            arr.push({from: path.join(rootDir, '/assets/**/*.html'), to: path.join(rootDir, '/public/')});
            arr.push({from: path.join(rootDir, '/assets/**/*.otf'), to: path.join(rootDir, '/public/')});
            arr.push({from: path.join(rootDir, '/assets/**/*.woff2'), to: path.join(rootDir, '/public/')});
            arr.push({from: path.join(rootDir, '/assets/**/*.css'), to: path.join(rootDir, '/public/')});
            arr.push({from: path.join(rootDir, '/assets/**/*.png'), to: path.join(rootDir, '/public/')});
            arr.push({from: path.join(rootDir, '/assets/**/*.svg'), to: path.join(rootDir, '/public/')});
            arr.push({from: path.join(rootDir, '/assets/**/*.gif'), to: path.join(rootDir, '/public/')});
            arr.push({from: path.join(rootDir, '/assets/**/*.jpg'), to: path.join(rootDir, '/public/')});
            arr.push({from: path.join(rootDir, '/assets/**/*.ico'), to: path.join(rootDir, '/public/')});
        }
    }catch (e) {
        // console.info(e);
    }
    return new CopyWebpackPlugin(arr);
}

module.exports = getCopyPlugin;