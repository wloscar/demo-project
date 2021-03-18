/**
 * @flie 开放组件入口文件
 */
import * as echarts from 'echarts';
import { Interfaces, Utils } from 'bi-open-sdk';
import './index.scss';
import { t } from './i18n';

class MyComponent {
  chart: echarts.ECharts;

  lastProps: {
    width: number;
    height: number;
  };

  setOption(props: Interfaces.LifecycleProps<Interfaces.ComponentProps>) {
    if (this.chart) {
      const customProps = props.customProps;
      const data = customProps.data;
      const dataConfig = customProps.dataConfig;
      const viewConfig = customProps.viewConfig;
      const fieldSettingMap = viewConfig.fieldSettingMap;

      // 主题颜色
      const colorSeries = customProps.viewConfig?.chartColorSeries?.colors ?? [];

      // 所有度量
      const rowFields = dataConfig.find(each => each.areaType === 'row')?.fields ?? [];

      // 所有度量
      const columnsFields = dataConfig.find(each => each.areaType === 'column')?.fields ?? [];

      // 第一行数据
      const [firstRow] = data;

      // 度量对应的列下标
      const fieldColumnIndexMap: {
        [key: string]: number;
      } = firstRow.reduce(
        (prev, curr, i: number) => ({
          ...prev,
          [curr.fieldId]: i,
        }),
        {},
      );

      const series = columnsFields.map((each, i) => {
        const filedSetting = fieldSettingMap[each.fieldId];
        return {
          id: each.fieldId,
          type: 'bar',
          data: data.map(row => row[fieldColumnIndexMap[each.fieldId]]?.value),
          coordinateSystem: 'polar',
          // 设置别名
          name: filedSetting?.aliasName ?? each.showName,
          // 设置色系
          color: colorSeries[i],
        };
      });

      // 图例
      const legend = series.map(each => each.name);

      // meta 中限制了只有一个维度
      const [onlyRow] = rowFields;
      const category = data.map(row => row[fieldColumnIndexMap[onlyRow?.fieldId]]?.value);

      // 绘制图表
      this.chart.setOption({
        angleAxis: {
          startAngle: viewConfig.display.startAngle,
        },
        radiusAxis: {
          type: 'category',
          data: category,
          z: 10,
        },
        polar: {
          radius: '60%',
        },
        tooltip: {
          trigger: 'item',
          textStyle: {
            color: viewConfig.chartSkin.key === 'black' ? '#fff' : '#333',
          },
          backgroundColor: viewConfig.chartSkin.key === 'black' ? '#222' : '#fff',
          extraCssText: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);',
          formatter: (param: any) => {
            const fieldSetting = fieldSettingMap[param.seriesId];
            const value = Utils.formatNumberWithConfig(param.value, fieldSetting?.numberFormat);

            return `${param.seriesName ?? t('暂无数据')}<br />${param.name}: ${param.marker}${value}`;
          },
        },
        series,
        legend: {
          show: viewConfig.display.showLegend,
          data: legend,
          top: 10,
          padding: 0,
          textStyle: {
            color: viewConfig.chartSkin.key === 'black' ? '#fff' : '#333',
          },
        },
        textStyle: {
          color: viewConfig.chartSkin.key === 'black' ? '#fff' : '#333',
        },
      });
    }
  }

  bindEvents(props: Interfaces.LifecycleProps<Interfaces.ComponentProps>) {
    const customProps = props.customProps;
    const dispatch = customProps.dispatch;
    this.chart.on('click', (serie: any) => {
      dispatch({
        type: 'select',
        payload: {
          dataIndex: serie.dataIndex,
        },
      });
    });

    // 点击空白处事件
    // @ts-ignore
    this.chart.getZr().on('click', function (e) {
      if (!e.target) {
        dispatch({
          type: 'cancelSelect',
        });
      }
    });
  }

  /**
   * 保存上次状态
   */
  setLastProps(props: Interfaces.LifecycleProps<Interfaces.ComponentProps>) {
    this.lastProps = {
      width: props.customProps.viewConfig.width,
      height: props.customProps.viewConfig.height,
    };
  }

  /**
   * mount 生命周期, 在渲染时触发
   */
  mount(props: Interfaces.LifecycleProps<Interfaces.ComponentProps>) {
    props.container.classList.add('test-component');
    this.chart = echarts.init(props.container as HTMLDivElement);

    this.bindEvents(props);
    this.setOption(props);
    this.setLastProps(props);
  }

  /**
   * update 生命周期, 在更新时触发
   */
  update(props: Interfaces.LifecycleProps<Interfaces.ComponentProps>) {
    this.setOption(props);

    // 容器大小变更时触发 resize
    if (
      this.lastProps.width !== props.customProps.viewConfig.width ||
      this.lastProps.height !== props.customProps.viewConfig.height
    ) {
      this.chart.resize();
    }

    this.setLastProps(props);
  }

  /**
   * umount 生命周期, 在卸载时触发
   */
  umount(props: Interfaces.LifecycleProps<Interfaces.ComponentProps>) {
    console.log('trigger when component unmount');
  }
}

export default MyComponent;
