const path = require('path')

module.exports = {
  dev: {
    port: '3000',
    // 是否自动打开浏览器
    autoOpenBrowser: true,
    proxy: {
      '/s_api': {
        target: 'https://baidu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/s_api': ''
        }
      }
    }
  },
  prod: {
    publicPath: '/',
    // 打包文件根路径
    assetsRoot: path.resolve(__dirname, '../dist'),
    // 是否打开模块分析器
    bundleAnalyzerReport: false
  }
}
