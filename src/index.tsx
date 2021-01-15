/**
 * @flie 开放组件入口文件
 */
import { createBIComponent } from 'bi-open-react-sdk';
import './index.scss';
import Component from './component';

export const { bootstrap, mount, unmount, update } = createBIComponent({
  element: Component,
});
