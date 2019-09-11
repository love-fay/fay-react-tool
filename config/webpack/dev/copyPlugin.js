const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
let arr = [];

function getCopyPlugin(rootDir){
    try {
        const status = fs.statSync(path.join(rootDir, 'assets'));
        if(status.isDirectory()){
            arr.push({from: rootDir + '/assets', to: rootDir + '/public/assets'});
            const serviceWorkerStatus = fs.statSync(path.join(rootDir, 'assets/serviceWorker.js'));
            if(serviceWorkerStatus.isFile()){
                arr.push({from: rootDir + '/assets/serviceWorker.js', to: rootDir + '/public'});
            }
        }
    }catch (e) {
        // console.info(e);
    }
    return new CopyWebpackPlugin(arr);
}

module.exports = getCopyPlugin;