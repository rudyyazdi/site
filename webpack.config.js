const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
