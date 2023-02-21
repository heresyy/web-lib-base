module.exports = {
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
