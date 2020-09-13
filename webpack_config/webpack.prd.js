const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    require('autoprefixer'),
    require('cssnano')
  ]
};
