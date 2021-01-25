/* 为了保证打包产物的稳定性，目前仅仅开放devServer相关配置项 */
module.exports = {
  entry: {
    BIComponentMeta: './src/meta.ts',
    BIComponent: './src/index.tsx',
  },
  devServer: {
    port: 8001,
    https: true,
  },
};
