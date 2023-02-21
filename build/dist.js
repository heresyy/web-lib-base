const path = require('path')

const { coffeeRule, stylusRule } = require('.')

module.exports = {
  mode: 'production',
  watch: true,
  entry: './src/index.coffee',
  output: {
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    library: {
      name: '[XXX]',
      type: 'umd'
    },
    filename: 'index.js'
  },
  externals: ['lodash', 'react'],
  module: {
    rules: [
      coffeeRule,
      stylusRule
    ]
  }
}
