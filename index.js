const { createLogger } = require('redux-logger');

module.exports = function(opts) {
  return {
    onAction: createLogger(opts),
  };
};
