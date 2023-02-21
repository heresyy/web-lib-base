const path = require('path')
const babelLoader = require('babel-loader')

module.exports = {
  mode: 'production',
  watch: true,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    library: {
      name: '[XXX]',
      type: 'umd'
    },
    filename: 'index.js'
  },
  externals: ['lodash', 'react'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: babelLoader
      }
    ]
  }
}
