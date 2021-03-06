const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  //devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/i,
        loader: 'babel-loader',
        exclude: /(node_modules|yarn|bower_components)/,
        options: {
          presets: ["@babel/env"]
        }
      },{}
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
      inject: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new NodePolyfillPlugin()
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname , 'dist'),
    clean: true
  },
  devServer: {
    static: './dist',
    hot: true,
    port: 3000
  },
};
