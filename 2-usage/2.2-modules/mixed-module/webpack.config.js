module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    pathinfo: true,
    filename: 'bundle.js',
  },
  resolve: {
    modules: ['node_modules']
  },
};
