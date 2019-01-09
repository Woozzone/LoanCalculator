const common = require('./webpack.common');
const merge = require('webpack-merge');
const CWP = require('clean-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    new CWP('./dist')
  ]
})