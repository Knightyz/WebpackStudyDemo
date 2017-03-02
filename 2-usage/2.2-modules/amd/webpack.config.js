var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    pathinfo: true,
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].bundle.js',
  },
}
