const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    path: path.join(__dirname, '/rudyyazdi.github.io'),
    // publicPath: '/rudyyazdi.github.io/',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.esj',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react',
            'stage-2',
          ],
        },
      },
    ],
  },
};
