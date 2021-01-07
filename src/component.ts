/**
 * @flie 开放组件入口文件
 */
import * as echarts from "echarts";
import { Interfaces } from "bi-open-sdk";
import "./index.less";

class MyComponent {
  chart: any;

  setOption(props: Interfaces.LifecycleProps) {
    if (this.chart) {
      const customProps = props.customProps as Interfaces.ComponentProps;
      const data = customProps.data;
      const dataConfig = customProps.dataConfig;
      const viewConfig = customProps.viewConfig;

      const colorSeries: any =
        customProps.viewConfig?.chartColorSeries?.colors ?? [];
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

  bindEvents(props: Interfaces.LifecycleProps) {
    this.chart.on("click", "series", (serie: any) => {
      //@ts-ignore
      if (typeof props.customProps.action.select === "function") {
        //@ts-ignore
        props.customProps.action.select({
          dataIndex: serie.dataIndex,
        });
      }
    });
  }

  mount(props: Interfaces.LifecycleProps) {
    const root = document.createElement("div");
    root.style.width = "100%";
    root.style.height = "100%";
    root.classList.add("test-component");
    props.container.appendChild(root);
    this.chart = echarts.init(root);

    this.bindEvents(props);
    console.log("trigger when component mount");
    this.setOption(props);
  }

  update(props: Interfaces.LifecycleProps) {
    console.log("trigger when component update");
    this.setOption(props);
  }

  umount(props: Interfaces.LifecycleProps) {
    console.log("trigger when component unmount");
  }
}

export default MyComponent;
