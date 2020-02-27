var path = require('path');

module.exports = {
  stats: 'minimal',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 8080,
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      }
    ]
  }
}