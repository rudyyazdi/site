const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/main.js'
  ],
  output: {
    path: path.join(__dirname, '/rudyyazdi.github.io'),
    // publicPath: '/rudyyazdi.github.io/',
    filename: isProduction ? 'bundle.[chunkhash].js' : 'bundle.js'
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
        test: /test.js$/,
        exclude: /node_modules/,
        loader: 'mocha-loader'
      },
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
