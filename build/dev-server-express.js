var PORT = 8080
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.dev.conf')

var app = express()
var compiler = webpack(config)

// proxy
// var proxy = require('http-proxy-middleware')([
//   '**',
//   '!/',
//   '!/(maskzh)**',
//   '!/*.(html|js|css|png|jpg|gif|json)',
//   '!/__webpack_hmr*'
// ], {
//   target: 'http://purchase.jkbsapp.com',
//   logLevel: 'debug',
//   changeOrigin: true
// })
// app.use(proxy)

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

// enable hot-reload and state-preserving
// compilation error display
app.use(require('webpack-hot-middleware')(compiler))

app.listen(PORT, 'localhost', function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + PORT)
})
