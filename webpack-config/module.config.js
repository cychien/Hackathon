const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const sharedStyle = path.resolve(__dirname, '../src/lib')
const globalStyles = [path.resolve(__dirname, '../node_modules'), sharedStyle]

module.exports = {
  rules: [
    {
      test: /\.html$/,
      use: ['html-loader']
    },
    {
      test: /\.css$/,
      include: globalStyles,
      use: [
        MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            modules: true,
            minimize: true,
            localIdentName: '[local]'
          }
        }
      ]
    },
    {
      test: /\.css$/,
      exclude: globalStyles,
      use: [
        MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
            minimize: true,
            sourceMap: true,
            localIdentName: '[name]__[local]__[hash:base64:5]'
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [require('autoprefixer')]
          }
        }
      ]
    },
    {
      test: /\.(jpg|png|gif|svg)(|\?[a-z0-9=\.]+)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 50000,
          name: 'images/[name]-[hash:base64:5].[ext]'
        }
      }]
    },
    {
      test: /\.(otf|eot|ttf|woff|woff2)(|\?[a-z0-9=\.]+)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 50000,
          name: 'fonts/[name]-[hash:base64:5].[ext]'
        }
      }]
    },
    {
      test: /\.json$/,
      exclude: /node_modules/,
      use: ['json-loader']
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }
  ]
}
