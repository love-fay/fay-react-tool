const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
let arr = [];

function getCopyPlugin(rootDir) {
    try {
        const status = fs.statSync(path.join(rootDir, 'assets'));
        if(status.isDirectory()){
            arr.push({from: rootDir + '/assets', to: rootDir + '/package/pro/dist/assets'});
        }
        arr.push({from: rootDir + '/package/pro/package.json', to: rootDir + '/package/pro/dist/'});
    }catch (e) {
        // console.info(e);
    }
    return new CopyWebpackPlugin(arr);
}

module.exports = getCopyPlugin;
