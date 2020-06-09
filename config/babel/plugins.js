const path = require('path');
const rootDir = path.join(__dirname, '/../../../../..');

const plugins = [
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-syntax-dynamic-import",
  [
    "@babel/plugin-transform-runtime", {
    corejs: 3
  }
  ],
  [
    "@babel/plugin-proposal-object-rest-spread", {
    useBuiltIns: true
  }
  ],
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      alias: {
        '@': path.resolve(rootDir, 'src')
      }
    }
  ]
];

module.exports = {plugins};