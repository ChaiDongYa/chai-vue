/*
 * @Description:
 * @Author: ChaiDong
 * @Date: 2022-08-05 14:44:54
 * @LastEditTime: 2022-08-05 15:06:49
 * @LastEditors: ChaiDong
 * @Reference:
 */
const path = require("path");
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "examples/main.ts",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  // 扩展 webpack 配置
  chainWebpack: (config) => {
    // 新增一个 ~ 指向 packages 目录, 方便示例代码中使用
    config.resolve.alias.set("~", path.resolve("packages"));
  },
});
