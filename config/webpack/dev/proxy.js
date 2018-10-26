function getProxy(rootDir){
    let proxy={
        '/resource':'http://205.0.0.19:8000'
    };
    try{
        const {apiServer} = require(rootDir + '/app/config.js');

        apiServer && (proxy = {
            ...proxy,
            '/api':{
                target: apiServer,
                pathRewrite: {'^/api': ''}
            }
        });
        console.log('proxy: /api->'+apiServer);
    } catch (e) {
        console.log(e);
    }
    return proxy;
}

module.exports = getProxy;