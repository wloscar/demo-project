/**
 * @flie 开放组件入口文件
 */
import { createBIComponent } from "bi-open-sdk";
import componentMeta from "./meta";
import MyComponent from "./component";
import "./index.scss";

export const { bootstrap, mount, unmount, update } = createBIComponent({
  element: MyComponent,
  componentMeta,
});
