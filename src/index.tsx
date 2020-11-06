/**
 * @flie 开放组件入口文件
 */
import * as React from "react";
import * as echarts from "echarts";
import { Interfaces, Utils, createBIComponent } from "bi-open-react-sdk";
import * as _ from "lodash";
import componentMeta from "./meta";
import { CommonColorSeries } from "./config";
import "./index.scss";
enum ColorSerie {
  "business" = "business",
  "classic" = "classic",
}
class MyComponent extends React.Component<Interfaces.BIComponentProps, any> {
  componentDidMount() {
    this.echartInstance = echarts.init(this.chartRootDomRef);
    this.initChart(this.props);
  }

  componentDidUpdate() {
    this.initChart(this.props);
  }

  private chartRootDomRef: HTMLDivElement;

  private echartInstance: any;
  private initChart(props: any) {
    console.log(props);
    const data = this.props.data;
    const dataConfig = this.props.dataConfig as any;
    const viewConfig = this.props.viewConfig as any;
    const chartsTheme = this.props.globalConfig.setting
      .chartsTheme as ColorSerie;
    const colorSeries = CommonColorSeries[chartsTheme].colors;
    const measureInfo = dataConfig[2];
    // 转置矩阵
    const result = Utils.transpose(data);
    const legend = [];
    const category = result[0].map((item: any) => item.value);
    const series = [];
    for (let i = 1; i < result.length; i++) {
      const field = measureInfo.fields[i - 1];
      const serie = {
        type: "bar",
        data: result[i],
        coordinateSystem: "polar",
        name: Utils.getAliasName(field, props),
        color: colorSeries[i - 1],
      };
      legend.push(Utils.getAliasName(field, props));
      series.push(serie);
    }

    const option = {
      angleAxis: {
        max: "dataMax",
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
      tooltip: {
        show: true,
        trigger: "item",
      },
      legend: {
        show: viewConfig.display.showLegend,
        data: legend,
      },
    };
    // 绘制图表
    this.echartInstance.setOption(option, true);
    // 重新resize
    this.echartInstance.resize();
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
