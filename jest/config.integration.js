const config = require('./config.js');

module.exports = Object.assign({}, config, {
  testRegex: '\\.i(test|spec)\\.js$',
});
