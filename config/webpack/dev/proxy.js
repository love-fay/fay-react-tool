const fs = require('fs');
const path = require('path');

function getProxy(rootDir){
    let proxy={};
    try{
        const filePath = path.join(rootDir, '/../app/config.js');
        const status = fs.statSync(filePath);
        if(status.isFile()){
            const {apiServer} = require(filePath);
            apiServer && (proxy = {
                ...proxy,
                '/api':{
                    target: apiServer,
                    pathRewrite: {'^/api': ''}
                }
            });
            console.log('proxy: /api->'+apiServer);
        }
    } catch (e) {
        // console.log(e);
    }
    return proxy;
}

module.exports = getProxy;