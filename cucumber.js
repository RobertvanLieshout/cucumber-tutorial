var common = '--require features/step_definitions --format pretty';

module.exports = {
  build: common + ' --format progress',
  'default': common,
  'es5': '--tags ~@es6'
};
