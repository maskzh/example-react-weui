var path = require('path')
module.exports = {
  entry: {
    app: './src/index.js',
    lib: [
      'react',
      'react-router',
      'react-redux',
      'redux',
      'redux-thunk',
      'redux-simple-router',
      'redux-localstorage',
      'lodash',
      'normalizr',
      'antd',
      'moment',
      'humps',
      'isomorphic-fetch',
      'sha1',
      'echarts'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    publicPath: 'static/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl'],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
      {
        test: /(toolkit|index)\.css$/,
        loader: 'style-loader?insertAt=top!css-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        ],
        exclude: /(index|toolkit)\.css$/
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus-loader'
      },
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'babel!eslint',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}
