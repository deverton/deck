const { getBaseConfig } = require('../base.webpack.config');
const baseConfig = getBaseConfig('oracle');

module.exports = {
  ...baseConfig,
  externals: [...baseConfig.externals, '@spinnaker/core'],
};
