const config = require('../electron/pro/config');
const path = require('path');
const rootDir = path.join(__dirname, '/../../../../../..');

module.exports = config({
    rootDir: rootDir,
    entry: path.join(rootDir, '/src/main')
});