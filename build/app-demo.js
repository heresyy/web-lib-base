const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { babelLoader, coffeeRule, stylusRule } = require('.')

module.exports = {
  mode: 'development',
  entry: './demo-app/index.coffee',
  output: {
    clean: true,
    path: path.resolve(__dirname, '../demo-app/dist'),
    filename: 'index.js'
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
      coffeeRule,
      stylusRule,
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  }
}
