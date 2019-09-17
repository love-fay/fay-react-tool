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
                const {path, target, changeOrigin=false} = item;
                proxy = {...proxy, ['/'+path]: {target, pathRewrite: {['^/'+path]: ''}, changeOrigin}};
                console.log('proxy: /'+path+'->'+target);
            })
        }
    } catch (e) {
        console.log(e);
    }
    return proxy;
}

module.exports = getProxy;