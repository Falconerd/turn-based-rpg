module.exports = {
  context: __dirname + '/src',
  entry: {
    polyfill: 'babel-polyfill',
    app: './main.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    publicPath: '/assets'
  },
  devServer: {
    contentBase: __dirname + '/src'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }]
      }
    ]
  }
};
