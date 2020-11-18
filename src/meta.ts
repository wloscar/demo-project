/**
 * 导出组件的相关配置
 */
import { Interfaces } from "bi-open-sdk";

const componentMeta: Interfaces.BIComponentMeta = {
  propsSchema: {
    styleSchema: {
      schema: {
        type: "object",
        className: "tabs-uischema-container",
        props: { mode: "collapse" },
        properties: {
          // 请在此处填写你需要自定义的属性
          display: {
            type: "object",
            title: "显示设置",
            properties: {
              showLegend: {
                type: "switch",
                id: "showLegend",
                defaultValue: true,
                props: {
                  mode: "checkbox",
                  label: "显示图例",
                },
              },
              startAngle: {
                title: "其实角度",
                id: "startAngle",
                type: "number",
                defaultValue: 0,
                props: {
                  placeholder: "请输出起始角度",
                  maxLength: 140,
                },
              },
            },
          },
        },
      },
    },
    dataSchema: {
      schema: {
        area: [
          {
            id: "drill",
            areaName: "钻取/维度",
            queryAxis: "drill",
            rule: {
              show: false,
              type: "dimension", // 维度还是计量,都可以接受为all
              required: false, // 是否是更新图表必须字段
              /** 限制数量 */
              maxColNum: 6,
            },
            columnList: [],
          },
          {
            id: "area_onerow",
            areaName: "维度",
            queryAxis: "row",
            rule: {
              type: "dimension", // 维度还是计量,都可以接受为all
              maxColNum: 1, // 最多允许的字段数
              required: true, // 是否是更新图标必须字段
            },
            columnList: [],
          },
          {
            id: "area_column",
            areaName: "度量",
            queryAxis: "column",
            rule: {
              type: "measure", // 维度还是计量,都可以接受为all
              maxColNum: 3, // 最多允许的字段数
              required: true, // 是否是更新图标必须字段
            },
            columnList: [],
          },
          {
            id: "filters",
            areaName: "过滤器", //  名称
            queryAxis: "filters",
            rule: {
              type: "all",
              required: false,
            },
            columnList: [],
          },
        ],
        distinct: false,
        refresh: -1, //  default
        /** 限制条数 */
        limitNum: 1000,
      },
    },
  },
};
export default componentMeta;
