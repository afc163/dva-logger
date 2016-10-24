module.exports = function(opts) {
  return {
    onAction: require('redux-logger')(opts),
  };
};
