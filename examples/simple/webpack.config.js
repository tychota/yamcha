var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
}


// When inside Yamcha repo, prefer src to compiled version.
// You can safely delete these lines in your project.
var YamchaSrc = path.join(__dirname, '..', '..', 'src')
var YamchaNodeModules = path.join(__dirname, '..', '..', 'node_modules')
var fs = require('fs')
if (fs.existsSync(YamchaSrc) && fs.existsSync(YamchaNodeModules)) {
  // Resolve Redux to source
  module.exports.resolve = { alias: { 'redux': YamchaSrc } }
  // Our root .babelrc needs this flag for CommonJS output
  process.env.BABEL_ENV = 'commonjs'
  // Compile Redux from source
  module.exports.module.loaders.push({
    test: /\.jsx?$/,
    loaders: ['babel'],
    include: YamchaSrc
  })
}
