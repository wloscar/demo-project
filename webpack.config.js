/* 为了保证打包产物的稳定性，目前仅仅开放devServer相关配置项 */
module.exports = {
  devServer: {
    port: 8001,
    https: true,
    host: '127.0.0.1',
  },
  externals: {
    lodash: '_',
    react: 'React',
    'react-dom': 'ReactDOM',
    moment: 'moment',
    echarts: 'echarts'
  },
};
