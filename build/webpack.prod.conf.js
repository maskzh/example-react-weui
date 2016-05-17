var path = require('path')
var webpack = require('webpack')
var config = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin

config.output.filename = '[name].[chunkhash].js'
config.output.chunkFilename = '[id].[chunkhash].js'

var SOURCE_MAP = true
config.devtool = SOURCE_MAP ? 'source-map' : false

config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new CommonsChunkPlugin({
    name: 'lib',
    minChunks: Infinity,
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin('[name].[contenthash].css'),
  new HtmlWebpackPlugin({
    title: '分销商城',
    filename: '../index.html',
    template: 'src/index.html'
  })
])
// config.module.loaders.pop()
// config.module.loaders.push({
//   test: /(toolkit|index)\.css$/,
//   loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
// })

module.exports = config
