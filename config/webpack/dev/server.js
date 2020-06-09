const fs = require('fs');
const path = require('path');
const getProxy = require('./proxy');
const {getPublicPathWithoutStartAndEndForwardSlash} = require('../../publicPath');

function getServer(rootDir, port, entry, https){
    const publicPathWithoutStartAndEndForwardSlash = getPublicPathWithoutStartAndEndForwardSlash();
    const historyApiFallback = publicPathWithoutStartAndEndForwardSlash ? {
        rewrites: [
            { from: new RegExp("^\\/" + publicPathWithoutStartAndEndForwardSlash), to: '/'+publicPathWithoutStartAndEndForwardSlash+'/index.html' }
        ]
    } : true;

    let proxy={
        contentBase: path.join(rootDir, 'public'),
        compress: false,
        host: "0.0.0.0",
        port: port,
        historyApiFallback,
        inline: true,
        hot: true,
        hotOnly: true,
        proxy: getProxy(entry),
        stats: {children: false},
    };
    if(https)
    proxy = {
        ...proxy,
        http2: true,
        https: {
            key: fs.readFileSync(path.join(rootDir, 'node_modules/@fay-react/tool/ca/server.key')),
            cert: fs.readFileSync(path.join(rootDir, 'node_modules/@fay-react/tool/ca/server.crt')),
            ca: fs.readFileSync(path.join(rootDir, 'node_modules/@fay-react/tool/ca/server.csr')),
        }
    };

    return proxy;
}

module.exports = getServer;