const merge = require('webpack-merge');
const common = require('./webpack_config/webpack.common.js')

module.exports = ({ env }) => {
  const enviro = require(`./webpack_config/webpack.${env}.js`);
  return merge(common, enviro);
};
