const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const WebpackObfuscator = require('webpack-obfuscator'); // Import the Webpack-specific obfuscator
require('dotenv').config();

module.exports = {
  entry: './src/index.js', // Adjust if your entry point is different
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html', // This points to the source HTML file
        filename: 'index.html', // This makes sure the output file is index.html
      }),
    new webpack.DefinePlugin({
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
    }),
    new WebpackObfuscator({
      rotateStringArray: true,
    }, ['excluded_bundle.js']), // Example: exclude files from obfuscation if necessary
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
