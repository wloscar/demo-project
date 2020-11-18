/**
 * @flie 开放组件入口文件
 */
import * as echarts from "echarts";
import { Interfaces, createBIComponent } from "bi-open-sdk";
import componentMeta from "./meta";
import { CommonColorSeries } from "./config";
import "./index.scss";
enum ColorSerie {
  "business" = "business",
  "classic" = "classic",
}

class MyComponent {
  chart: any;

  setOption(props: Interfaces.BIComponentLifecycleProps) {
    if (this.chart) {
      const customProps = props.customProps as Interfaces.BIComponentProps;
      const data = customProps.data;
      const dataConfig = customProps.dataConfig as any;
      const viewConfig = customProps.viewConfig as any;
      const chartsTheme = customProps.globalConfig.setting
        .chartsTheme as ColorSerie;
      const colorSeries = CommonColorSeries[chartsTheme].colors;
      const measureInfo = dataConfig[2];
      // 转置矩阵
      const result = data[0].map((col: any, i: number) =>
        data.map((row: any) => row[i])
      );
      const legend = [];
      const category = result[0].map((item: any) => item.value);
      const series = [];
      for (let i = 1; i < result.length; i++) {
        const serie = {
          type: "bar",
          data: result[i],
          coordinateSystem: "polar",
          name: measureInfo.fields[i - 1].showName,
          color: colorSeries[i - 1],
        };
        legend.push(measureInfo.fields[i - 1].showName);
        series.push(serie);
      }
      const option = {
        angleAxis: {
          max: 4,
          startAngle: viewConfig.display.startAngle,
          splitLine: {
            show: false,
          },
        },
        radiusAxis: {
          type: "category",
          data: category,
          z: 10,
        },
        polar: {},
        series,
        legend: {
          show: viewConfig.display.showLegend,
          data: legend,
        },
      };

      // 绘制图表
      this.chart.setOption(option);
    }
  }

  mount(props: Interfaces.BIComponentLifecycleProps) {
    const root = document.createElement("div");
    root.classList.add("test-component");
    props.container.appendChild(root);
    this.chart = echarts.init(root);

    this.setOption(props);
    console.log(111, "mount", props);
  }

  update(props: Interfaces.BIComponentLifecycleProps) {
    console.log(1111, props);
    this.setOption(props);
    console.log(1112, "update", props, window);
  }

  umount(props: Interfaces.BIComponentLifecycleProps) {
    console.log(111, "unmount", props);
  }
}

export const { bootstrap, mount, unmount, update } = createBIComponent({
  element: MyComponent,
  componentMeta,
});
