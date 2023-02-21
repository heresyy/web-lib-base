const path = require('path')

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
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              'transform-react-pug',
              'transform-react-jsx'
            ],
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react']
            ]
          }
        }
      }
    ]
  }
}
