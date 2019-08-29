const development = require('./dev/config');
const production = require('./pro/config');
const test = require('./test/config');

module.exports = {
  env: {
    development,
    production,
    test
  }
};