const path = require('path')
const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'vue-template'),
    filename: '[name].chunkhash.bundle.js',
    chunkFilename: '[name].chunkhash.bundle.js',
    publicPath: '/static/'
  },
  devtool: '',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: '/node_modules/',
          enforce: true
        },
      }
    }
  }
});
