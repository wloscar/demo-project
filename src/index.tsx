/**
 * @flie 开放组件入口文件
 */
import * as React from "react";
import * as echarts from "echarts";
import { Interfaces, createBIComponent } from "@alife/bi-open-react-sdk";
import componentMeta from "./meta";
import { CommonColorSeries } from "./config";
import "./index.scss";
class MyComponent extends React.Component<Interfaces.BIComponentProps, any> {
  componentDidMount() {
    this.initChart(this.props);
  }

  componentDidUpdate() {
    this.initChart(this.props);
  }

  private chartRootDomRef: HTMLDivElement;

  private initChart(props: any) {
    const data = this.props.data;
    const dataConfig = this.props.dataConfig as any;
    const viewConfig = this.props.viewConfig as any;
    const chartsTheme = this.props.globalConfig.setting.chartsTheme as
      | "business"
      | "classic";
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
    const myChart = echarts.init(this.chartRootDomRef);
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
    myChart.setOption(option);
  }

  render() {
    return (
      <div className="test-component">
        <div
          className="chart-container"
          ref={(ref) => {
            this.chartRootDomRef = ref;
          }}
        />
      </div>
    );
  }
}

export const { bootstrap, mount, unmount, update } = createBIComponent({
  element: MyComponent,
  componentMeta,
});
