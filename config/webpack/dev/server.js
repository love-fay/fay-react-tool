const fs = require('fs');
const path = require('path');
const getProxy = require('./proxy');

function getServer(rootDir, port, entry, https){
    let proxy={
        contentBase: path.join(rootDir, 'public'),
        compress: false,
        host: "0.0.0.0",
        port: port,
        historyApiFallback: true,
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