/*
 * @Description:
 * @Author: ChaiDong
 * @Date: 2022-08-05 15:17:04
 * @LastEditTime: 2022-08-05 15:17:46
 * @LastEditors: ChaiDong
 * @Reference:
 */
import { App } from "vue";
import Button from "./src/button.vue";
// 定义 install 方法， App 作为参数
Button.install = (app: App): void => {
  app.component(Button.name, Button);
};
export default Button;
