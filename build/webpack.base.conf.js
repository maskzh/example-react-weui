var path = require('path')

module.exports = {
  entry: {
    app: './src/index.js',
    lib: [
      "classnames",
      "humps",
      "isomorphic-fetch",
      "lodash",
      "normalizr",
      "react",
      "react-dom",
      "react-redux",
      "react-router",
      "react-weui",
      "redux",
      "redux-actions",
      "redux-localstorage",
      "redux-router-redux",
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
        test: /\.css$/,
        loader: 'style-loader?insertAt=top!css-loader',
        include: path.resolve(__dirname, '../src/styles')
      },
      {
        test: /\.styl$/,
        loader: 'style-loader?insertAt=top!css-loader!stylus-loader',
        include: path.resolve(__dirname, '../src/styles')
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus-loader',
        include: [
          path.resolve(__dirname, '../src/components'),
          path.resolve(__dirname, '../src/containers')
        ],
      },
      {
        test: /\.js[x]?$/,
        loader: 'babel!eslint',
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
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
