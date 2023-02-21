const babelLoader = {
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

const stylusRule = {
  test: /\.styl$/,
  use: ['style-loader', 'css-loader', 'stylus-loader']
}

const coffeeRule = {
  test: /\.coffee$/,
  use: [
    babelLoader,
    'coffee-loader'
  ]
}

module.exports = {
  babelLoader,
  stylusRule,
  coffeeRule
}