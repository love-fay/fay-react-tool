const config = require('../dev/config');
const rootDir = __dirname+'/../../../../../..';

module.exports = config({
    rootDir: rootDir,
    template: rootDir + '/node_modules/@fay-react/tool/config/index.html',
    entry: rootDir + '/src'
});