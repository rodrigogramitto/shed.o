const path = require('path');
// const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/src/client/index.jsx'),
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      buffer: require.resolve('buffer/'),
    },
  },
};
