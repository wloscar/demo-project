/* 为了保证打包产物的稳定性，目前仅仅开放devServer部分配置项 */
module.exports = {
  devServer: {
    port: 8002,
    https: true,
    host: "127.0.0.1",
  },
};
