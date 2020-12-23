/**
 * @flie 开放组件入口文件
 */
import { createBIComponent } from "bi-open-react-sdk";
import componentMeta from "./meta";
import "./index.scss";
import Component from "./table";

export const { bootstrap, mount, unmount, update } = createBIComponent({
  element: Component,
  componentMeta,
});
