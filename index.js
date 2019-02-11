const logger = require('redux-logger');

module.exports = function(opts) {
  return {
    onAction: logger.createLogger(opts)
  };
};
