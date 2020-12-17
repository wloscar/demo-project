/**
 * @flie 开放组件入口文件
 */
import * as React from "react";
import * as echarts from "echarts";
import { Interfaces, Utils, createBIComponent } from "bi-open-react-sdk";
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
        data: this.reviseData4Echarts(result[i]),
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
        trigger: "axis",
        formatter: (params: any) => {
          const res = [];
          res.push(params[0].name);
          // 对显示数据进行格式化
          params.forEach((item: any) => {
            if (this.getConfigByFieldId(item.data.fieldId)) {
              res.push(
                `${item.seriesName} : ${Utils.Format.numberWithConfig(
                  item.data.value,
                  null,
                  this.getConfigByFieldId(item.data.fieldId).numberFormat
                )}`
              );
            } else {
              res.push(`${item.seriesName} : ${item.data.value}`);
            }
          });
          return res.join("<br/>");
        },
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

  /**
   * 将quickBI依赖的数据模型转换成Echarts所需的模型
   * @param data
   */
  private reviseData4Echarts(data: Array<Interfaces.IDataCell>) {
    return data.map((item) => {
      const { value, fieldId } = item;
      return {
        fieldId,
        value: item.originValue,
      };
    });
  }
  /**
   * 根据fieldId拿到度量上的配置
   * @param fieldId 字段id
   */
  private getConfigByFieldId(fieldId: string) {
    return (this.props.viewConfig as any).fieldSettingMap[fieldId] || null;
  }
  render() {
    return (
      <div className="test-component" style={{ width: "100%", height: "100%" }}>
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
