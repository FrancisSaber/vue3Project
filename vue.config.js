const path = require('path');

module.exports = {
  outputDir: './dist',
  configureWebpack: {
    // resolve 会合并到webpack内
    resolve: {
      // 默认情况下webpack配置@作为src的别名
      alias: {
        components: '@/components'
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
  }
};
