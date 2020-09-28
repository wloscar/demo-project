/**
 * @description 定制create-react-app的webpack配置，请谨慎改动
 */
const {
  override,
  overrideDevServer,
  addBabelPlugins,
  disableChunk,
} = require("customize-cra");
const fs = require("fs");
const msep = require("mini-css-extract-plugin");
// 定制webpack配置
function rewireWebpack(config, env) {
  config.output.filename = "main.js";
  config.output.library = "BIComponent";
  config.output.libraryTarget = "umd";
  // 调整css打包地址
  if (config.mode === "production") {
    const cssPlugin = config.plugins.find((plugin) => plugin instanceof msep);
    cssPlugin.options.filename = "main.css";
  }
  return config;
}
// 定制webpackDevServer的配置
function rewireDevServer(config) {
  config.disableHostCheck = true;
  // 开启https模式
  // config.https = true;
  // 设置头部支持远程跨域调试
  config.headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  };
  return config;
}

module.exports = {
  webpack: override(
    ...addBabelPlugins(
      [
        "import",
        { libraryName: "antd", libraryDirectory: "lib", style: true },
        "antd",
      ],
      [
        "import",
        { libraryName: "antd-mobile", libraryDirectory: "lib", style: "css" },
        "antd-mobile",
      ]
    ),
    disableChunk(),
    rewireWebpack
  ),
  devServer: overrideDevServer(rewireDevServer),
};
