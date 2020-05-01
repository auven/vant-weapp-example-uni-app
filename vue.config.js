// 复制第三方组件文件
const copyCustomCom = require('./build/copyCustomCom')

module.exports = {
  transpileDependencies: ['uni-simple-router'],
  configureWebpack: {
    plugins: [copyCustomCom]
  }
}
