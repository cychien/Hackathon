const webpack = require('webpack')
const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const yaml = require('js-yaml')
const fs = require('fs')
const configFile = (process.env.NODE_ENV === 'development')
  ? path.resolve(__dirname, 'config.development.yml')
  : (process.env.CONFIG === 'staging')
    ? path.resolve(__dirname, 'config.staging.yml')
    : path.resolve(__dirname, 'config.production.yml')
const appConfig = yaml.safeLoad(fs.readFileSync(configFile, 'utf8'))

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './client/index.js',
    vendor: [
      'bootstrapCSS',
      'reactDatesCSS',
      'reactSelectCSS',
      'fontAwesome',
      'appCSS'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    publicPath: '/'
  },
  module: require('./webpack-config/module.config.js'),
  resolve: require('./webpack-config/resolve.config.js'),
  plugins: [
    new HtmlWebpackPlugin({
      minify: true,
      filename: path.resolve(__dirname, 'dist/index.html'),
      template: './client/index.html',
      favicon: './static/images/favicon.ico'
    }),
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        // default: false,
      }
    }
  },
  externals: {
    APP_CONFIG: JSON.stringify(appConfig)
  },
  cache: true
}
