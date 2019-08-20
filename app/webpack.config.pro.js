/**
 * Create by fay on 2019-08-16 15:17
 */
const config = require('../config/webpack/pro/config');
const rootDir = __dirname;

module.exports = config({
    rootDir: rootDir,
    // template: rootDir + '/node_modules/@fay-react/tool/config/index.html',
    template: rootDir + '/../config/index.html',
    entry: rootDir + '/../app/index.tsx'
});