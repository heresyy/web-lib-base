const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const babelLoader = require('./babel-loader')

module.exports = {
  mode: 'development',
  entry: './demo-app/index.coffee',
  output: {
    path: path.resolve(__dirname, '../demo-app/dist'),
    filename: 'main.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './demo-app/dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../demo-app/index.html'),
      filename: path.resolve(__dirname, '../demo-app/dist/index.html')
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: babelLoader
      },
      {
        test: /\.coffee$/,
        use: [
          babelLoader,
          'coffee-loader'
        ]
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  }
}
