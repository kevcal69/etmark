'use strict'

const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './frontend/src/main.js',
  output: {
    path: path.resolve(__dirname, 'vue-template'),
    publicPath: '/static/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'frontend/index.html',
        inject: true
    }),
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'frontend/src'),
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
}
