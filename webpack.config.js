const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin")
const path = require('path')

module.exports = (env) => ({
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          env.prod ? MiniCssExtractPlugin.loader :'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [
          env.prod ? MiniCssExtractPlugin.loader :'style-loader',
          'css-loader',
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Payment form',
      template: path.resolve(__dirname, 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash].css',
    }),
    // Ваши существующие плагины
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.sharpMinify,
        options: {
          encodeOptions: {
            png: {
              quality: 75,
            },
          },
        },
      },
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
})
