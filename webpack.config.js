const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/main.js'
  ],
  output: {
    path: path.join(__dirname, '/rudyyazdi.github.io'),
    // publicPath: '/rudyyazdi.github.io/',
    filename: 'bundle.[chunkhash].js'
  },
  devServer: {
    inline: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'templates/index.esj'
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname),
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  }
};
