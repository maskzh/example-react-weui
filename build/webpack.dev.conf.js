var webpack = require('webpack')
var config = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin

// eval-source-map is faster for development
config.devtool = 'cheap-module-eval-source-map'

// add hot-reload related code to entry chunk
config.entry.app = [
  'eventsource-polyfill',
  'webpack-hot-middleware/client?quiet=true',
  config.entry.app
]

// necessary for the html plugin to work properly
// when serving the html from in-memory
config.output.publicPath = '/'

config.plugins = (config.plugins || []).concat([
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new CommonsChunkPlugin({
    name: 'lib',
    minChunks: Infinity,
  }),
  new HtmlWebpackPlugin({
    title: '分销商城',
    filename: 'index.html',
    template: 'src/index.html'
  }),
  new OpenBrowserPlugin({ url: 'http://localhost:8080' })
])
module.exports = config
