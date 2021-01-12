/**
 * @description 定制create-react-app的webpack配置，请谨慎改动
 */
const {
  override,
  overrideDevServer,
  addWebpackExternals,
  addBabelPlugins,
  addWebpackPlugin,
  disableChunk,
} = require("customize-cra");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 定制webpack配置
function rewireWebpack(config, env) {
  config.output.filename = (pathData) => {
    const outputMapping = {
      BIComponentMeta: "meta.js",
      BIComponent: "main.js",
    };

    return outputMapping[pathData.chunk.name] || "[name].js";
  };
  config.entry = {
    BIComponentMeta: "./src/meta.ts",
    BIComponent: "./src/index.tsx",
  };
  config.output.library = "[name]";
  config.output.libraryTarget = "umd";
  // 调整css打包地址
  const cssPlugin = config.plugins.find(
    (plugin) => plugin instanceof MiniCssExtractPlugin
  );

  if (cssPlugin) {
    cssPlugin.options.filename = "main.css";
  } else {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "main.css",
        chunkFilename: "[id].css",
      })
    );
  }
  return config;
}
// 定制webpackDevServer的配置
function rewireDevServer(config) {
  config.disableHostCheck = true;
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
    addWebpackExternals({
      // react: "React",
      // "react-dom": "ReactDOM",
      // lodash: "_",
    }),
    disableChunk(),
    rewireWebpack
  ),
  devServer: overrideDevServer(rewireDevServer),
};
