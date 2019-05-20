const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const resolve = require('./utils').resolve
// 是否是生产环境
const IS_PROD = process.env.NODE_ENV === 'production'

let loaders = [
  IS_PROD ? MiniCssExtractPlugin.loader : 'style-loader',
  {
    loader: 'css-loader',
    options: {
      // 开启css作用域
      modules: true,
      // 为css作用域的css加上唯一标识符
      localIdentName: '[name]__[local]--[hash:base64:5]'
    }
  },
  'sass-loader',
  {
    loader: 'sass-resources-loader',
    options: {
      // 配置sass全局变量引用地址
      resources: resolve('src/styles/variables.scss'),
    },
  },
  'postcss-loader'
]

module.exports = loaders