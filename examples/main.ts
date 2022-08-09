/*
 * @Description:
 * @Author: ChaiDong
 * @Date: 2022-08-05 14:44:54
 * @LastEditTime: 2022-08-05 15:19:59
 * @LastEditors: ChaiDong
 * @Reference:
 */
import { createApp } from "vue";
import App from "./App.vue";
import NanditVue from "~/index"; // 这里 ~ 就是在 tsconfig.json 以及 vue.config.js 配置的 packages 路径
// 导入组件库
// 注册组件库
const app = createApp(App);
app.use(NanditVue);
app.mount("#app");
