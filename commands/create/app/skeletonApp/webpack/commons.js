// const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { SRC_FOLDER, BUILD_FOLDER, STATIC_FOLDER } = require('./constants')

module.exports = {
  context: SRC_FOLDER,
  // entry: {
  //   app: './index.js'
  // },
  output: {
    path: BUILD_FOLDER,
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.html', '.css', '.sass', '.scss']
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      { test: /\.html$/, exclude: /node_modules/, loader: 'html-loader?exportAsEs6Default' },
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader', 'eslint-loader'] },
      { test: /\.ts$/, exclude: /node_modules/, loaders: ['babel-loader', 'ts-loader', 'eslint-loader'] },
      { test: /\.(png|jpe?g|gif|svg)$/i, use: ['file-loader'] },
      { test: /\.worker\.js$/, loaders: [{ loader: 'worker-loader', options: { inline: true } }] }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({ template: path.resolve(STATIC_FOLDER, 'index.html'), inject: 'body' }),
    new CopyWebpackPlugin([{
      from: STATIC_FOLDER,
      to: BUILD_FOLDER,
      ignore: ['index.html']
    }])
  ]
}
