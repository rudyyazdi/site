const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const isProduction = process.NODE_ENV === 'production';

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/main.js'
  ],
  output: {
    path: path.join(__dirname, '/rudyyazdi.github.io'),
    // publicPath: '/rudyyazdi.github.io/',
    filename: isProduction ? 'bundle.js' : 'bundle.[chunkhash].js'
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
        exclude: /(\/node_modules\/|test\.js|\.spec\.js$)/,
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
