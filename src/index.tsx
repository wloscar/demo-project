/**
 * 微模块的打包入口文件，用于与主应用做对接
 */
import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "./Component";
import { mockProps } from "./mocks";
let container: HTMLElement;

export async function bootstrap() {}

export async function mount(props: any) {
  const myProps = { ...mockProps, ...props };
  container = myProps.container;
  if (!container) {
    console.error("container is required");
    return;
  }
  ReactDOM.render(<MyComponent {...myProps} />, container);
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(container);
}

export async function update() {}
