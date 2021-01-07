/**
 * @flie 开放组件入口文件
 */
import { createBIComponent } from "bi-open-sdk";
import MyComponent from "./component";
import "./index.less";

export const { bootstrap, mount, unmount, update } = createBIComponent({
  element: MyComponent,
});
