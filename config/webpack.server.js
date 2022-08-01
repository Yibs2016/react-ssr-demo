
const path = require('path')
const nodeExternals = require("webpack-node-externals");
const {merge} = require("webpack-merge")

const commonConfig = require('./webpack.common')

const serverConfig = {
  target: 'node',   //不打包node自带模块
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build')
  },
  externals: [nodeExternals()], //不打包第三方模块
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'isomorphic-style-loader-react18',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }
        ]
      }
    ]
  }
}

module.exports = merge(commonConfig, serverConfig)
