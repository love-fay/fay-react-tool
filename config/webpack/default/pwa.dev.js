const config = require('../dev/config');
const path = require('path');
const rootDir = path.join(__dirname, '/../../../../../..');

module.exports = config({
    rootDir: rootDir,
    template: path.join(rootDir, '/node_modules/@keystore/tool/config/index.html'),
    entry: path.join(rootDir, '/src'),
    https: false,
    pwaEnable: true,
    pwa: true
});