const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

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
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            sourceMaps: false,
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-transform-async-to-generator'],
              ['@babel/plugin-transform-runtime'],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new Dotenv(),
  ],
};