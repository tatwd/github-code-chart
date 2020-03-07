const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = {
  mode: 'development',
  entry: './src/app.js',

  devServer: {
    contentBase: './',
    index: 'index.html'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],

  output: {
    filename: '[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/](echarts)[\\/]/,
          name: 'vendors.echarts',
          chunks: 'initial' // 不包含按需加载项
        }
      }
    },
    runtimeChunk: {
      name: 'runtime'
    }
  }
};
