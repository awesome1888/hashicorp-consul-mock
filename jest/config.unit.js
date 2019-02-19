const config = require('./config.js');

module.exports = Object.assign({}, config, {
  testRegex: '\\.u?(test|spec)\\.js$',
});
