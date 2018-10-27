const webpack = require('webpack')
const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const yaml = require('js-yaml')
const fs = require('fs')
const configFile = path.resolve(__dirname, 'config.development.yml')
const appConfig = yaml.safeLoad(fs.readFileSync(configFile, 'utf8'))

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './client/index.js',
    vendor: [
      'bootstrapCSS',
      'fontAwesome',
      'reactDatesCSS',
      //'reactSelectCSS',
      'appCSS'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  module: require('./webpack-config/module.config.js'),
  resolve: require('./webpack-config/resolve.config.js'),
  plugins: [
    new HtmlWebpackPlugin({
      minify: false,
      filename: path.resolve(__dirname, 'dist/index.html'),
      template: './client/index.html',
      favicon: './static/images/favicon.ico'
    }),
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
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
  devServer: {
    bonjour: false,
    port: 8700,
    contentBase: './dist',
    publicPath: '/',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  externals: {
    APP_CONFIG: JSON.stringify(appConfig)
  },
  cache: true
}
