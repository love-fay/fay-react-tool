const fs = require('fs');
const path = require('path');

function getProxy(rootDir){
    let proxy={};
    try{
        const filePath = path.join(rootDir, '/proxy.json');
        const status = fs.statSync(filePath);
        if(status.isFile()){
            const appProxy = require(filePath);
            appProxy.map((item, i) => {
                proxy = {...proxy, ['/'+item.path]: {target: item.target, pathRewrite: {['^/'+item.path]: ''}, changeOrigin: true}};
                console.log('proxy: /'+item.path+'->'+item.target);
            })
        }
    } catch (e) {
        console.log(e);
    }
    return proxy;
}

module.exports = getProxy;