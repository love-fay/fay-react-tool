function getProxy(rootDir){
    let proxy={
        '/resource':'http://205.0.0.19:8000'
    };
    try{
        const {apiServer, imKeepAliveServer, imServer} = require(rootDir + '/app/config.js');

        apiServer && (proxy = {
            ...proxy,
            '/api':{
                target: apiServer,
                pathRewrite: {'^/api': ''}
            }
        });
        imKeepAliveServer && (proxy = {
            ...proxy,
            '/imKeepAliveServer':{
                target: imKeepAliveServer,
                pathRewrite: {'^/imKeepAliveServer': ''}
            }
        });
        imServer && (proxy = {
            ...proxy,
            '/imServer':{
                target: imServer,
                pathRewrite: {'^/imServer': ''}
            }
        });

        console.log('proxy: /api->'+apiServer+' /imKeepAliveServer->'+imKeepAliveServer+' /imServer->'+imServer);
    } catch (e) {
        console.log(e);
    }
    return proxy;
}

module.exports = getProxy;