const webpack = require('webpack');
const path = require('path');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'], //run in Chrome
    frameworks: ['mocha', 'chai'], //use the mocha test framework
    files: [
      'tests.webpack.js' //just load this file
    ],
    reporters: ['progress'],
    port: 9876,
    autoWatch: true,
    singleRun: false,
    logLevel: config.LOG_DEBUG,
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'] //preprocess with webpack and our sourcemap loader
    },
    webpack: {
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
    }
  });
};
