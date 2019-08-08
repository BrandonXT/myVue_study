const path = require('path');
module.exports = {
  lintOnSave: false,
  devServer: {
    // 端口号
    port: 8081,
    // 自动打开浏览器
    open: true
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 配置全局less变量访问
        path.resolve(__dirname, './src/assets/styles/css/variables.less')
      ],
    },
  }
}
