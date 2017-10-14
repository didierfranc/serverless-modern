const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    filename: 'build.js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'env',
              {
                targets: {
                  node: '6.10'
                }
              }
            ]
          ]
        }
      }
    ]
  }
}
