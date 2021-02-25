export const props = {
  viewConfig: {
    display: {
      showLegend: true,
      startAngle: 0,
    },
    fieldSettingMap: {
      '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_price]|SUM||': {
        uuid: '11764630-35d9-499a-a26a-1476f6eb7ad9',
        aliasName: 'price',
        alignment: 'right',
        areaType: 'column',
        nameChangedFlag: false,
        numberFormat: {
          formatModal: '0',
          fmtType: 'CN',
          valueModal: '0',
          decimalPlaces: '',
          thousandth: false,
        },
        label: false,
      },
      '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_shipping_cost]|SUM||': {
        uuid: '7e3bcb49-9702-4afd-85b1-62235471a6d3',
        aliasName: 'shipping_cost',
        alignment: 'right',
        areaType: 'column',
        nameChangedFlag: false,
        numberFormat: {
          formatModal: '0',
          fmtType: 'CN',
          valueModal: '0',
          decimalPlaces: '',
          thousandth: false,
        },
        label: false,
      },
    },
    caption: 'DEMO 组件-MySQL',
    title: {
      show: true,
    },
    width: 589,
    height: 326,
    linkageParam: null,
    chartColorSeries: {
      key: 'business',
      name: '商务',
      colors: [
        '#52619B',
        '#39B8FF',
        '#65CA92',
        '#C0EDF3',
        '#5885E2',
        '#F2D40C',
        '#CB8762',
        '#EAE9F1',
        '#ADD76F',
        '#897CBD',
        '#B0BBDC',
        '#E8E4C8',
      ],
    },
    chartSkin: {
      key: 'default',
    },
  },
  advancedConfig: {},
  dataConfig: [
    {
      areaType: 'drill',
      fields: [
        {
          fieldId:
            '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_area].[Ne70149_area].[Ne70149_area]',
          pathId:
            '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_area].[Ne70149_area].[Ne70149_area]',
          fieldName: 'area',
          showName: 'area',
          valueType: 'location',
          fieldType: 'dimension',
          aggregation: null,
          dimGranularity: 'REGION',
          order: null,
          advancedCalculation: null,
          extends: {},
          complexFilter: {
            limitNum: 1000,
            filter: false,
          },
        },
        {
          fieldId:
            '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_province].[Ne70149_province].[Ne70149_province]',
          pathId:
            '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_province].[Ne70149_province].[Ne70149_province]',
          uuid: '94d8c655-4d18-4f93-bcaa-ad7719d6cc78',
          fieldName: 'province',
          showName: 'province',
          valueType: 'string',
          fieldType: 'dimension',
          aggregation: null,
          order: null,
          advancedCalculation: null,
          extends: {},
          complexFilter: {
            limitNum: 1000,
            filter: false,
          },
        },
        {
          fieldId:
            '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_city].[Ne70149_city].[Ne70149_city]',
          pathId:
            '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_city].[Ne70149_city].[Ne70149_city]',
          uuid: '8f5a4d50-b0a0-4697-8214-674b19997ac5',
          fieldName: 'city',
          showName: 'city',
          valueType: 'string',
          fieldType: 'dimension',
          aggregation: null,
          order: null,
          advancedCalculation: null,
          extends: {},
          complexFilter: {
            limitNum: 1000,
            filter: false,
          },
        },
      ],
    },
    {
      areaType: 'row',
      fields: [
        {
          fieldId:
            '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_area].[Ne70149_area].[Ne70149_area]',
          pathId: '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_area]',
          uuid: '6915b5bd-1798-4bf0-97d7-6bb778fc44d5',
          fieldName: 'area',
          showName: 'area',
          valueType: 'location',
          fieldType: 'dimension',
          aggregation: null,
          displayType: null,
          dimGranularity: 'REGION',
          order: null,
          advancedCalculation: null,
          extends: {},
          complexFilter: {
            limitNum: 1000,
            filter: false,
          },
        },
      ],
    },
    {
      areaType: 'column',
      fields: [
        {
          fieldId: '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_price]|SUM||',
          pathId: '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_price]',
          uuid: '11764630-35d9-499a-a26a-1476f6eb7ad9',
          skin: 'number',
          fieldName: 'price',
          showName: 'price',
          isCalc: false,
          valueType: 'number',
          fieldType: 'measure',
          aggregation: 'sum',
          order: null,
          extends: {},
          complexFilter: {
            limitNum: 1000,
            filter: false,
          },
        },
        {
          fieldId:
            '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_shipping_cost]|SUM||',
          pathId: '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_shipping_cost]',
          uuid: '7e3bcb49-9702-4afd-85b1-62235471a6d3',
          skin: 'number',
          fieldName: 'shipping_cost',
          showName: 'shipping_cost',
          isCalc: false,
          valueType: 'number',
          fieldType: 'measure',
          aggregation: 'sum',
          order: null,
          extends: {},
          complexFilter: {
            limitNum: 1000,
            filter: false,
          },
        },
      ],
    },
    {
      areaType: 'filters',
      fields: [],
    },
  ],
  data: [
    [
      {
        originValue: '东北',
        value: '东北',
        fieldId:
          '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_area].[Ne70149_area].[Ne70149_area]',
        geoInfo: {
          dimGranularity: 'REGION',
          continent: 'Asia',
          country: 'China',
          region: '东北',
          longitude: 128.1005859,
          latitude: 46.83013364,
        },
      },
      {
        originValue: '92817.2300000001',
        value: '92817.2300000001',
        fieldId: '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_price]|SUM||',
        geoInfo: false,
      },
      {
        originValue: '15766.039999999959',
        value: '15766.039999999959',
        fieldId:
          '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_shipping_cost]|SUM||',
        geoInfo: false,
      },
    ],
    [
      {
        originValue: '华东',
        value: '华东',
        fieldId:
          '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_area].[Ne70149_area].[Ne70149_area]',
        geoInfo: {
          dimGranularity: 'REGION',
          continent: 'Asia',
          country: 'China',
          region: '华东',
          longitude: 119.0039063,
          latitude: 30.44867368,
        },
      },
      {
        originValue: '154059.52000000048',
        value: '154059.52000000048',
        fieldId: '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_price]|SUM||',
        geoInfo: false,
      },
      {
        originValue: '19541.970000000078',
        value: '19541.970000000078',
        fieldId:
          '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_shipping_cost]|SUM||',
        geoInfo: false,
      },
    ],
    [
      {
        originValue: '华中',
        value: '华中',
        fieldId:
          '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_area].[Ne70149_area].[Ne70149_area]',
        geoInfo: {
          dimGranularity: 'REGION',
          continent: 'Asia',
          country: 'China',
          region: '华中',
          longitude: 112.6757813,
          latitude: 30.97760909,
        },
      },
      {
        originValue: '57466.24000000008',
        value: '57466.24000000008',
        fieldId: '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_price]|SUM||',
        geoInfo: false,
      },
      {
        originValue: '8727.749999999969',
        value: '8727.749999999969',
        fieldId:
          '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_shipping_cost]|SUM||',
        geoInfo: false,
      },
    ],
    [
      {
        originValue: '华北',
        value: '华北',
        fieldId:
          '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_area].[Ne70149_area].[Ne70149_area]',
        geoInfo: {
          dimGranularity: 'REGION',
          continent: 'Asia',
          country: 'China',
          region: '华北',
          longitude: 112.7197266,
          latitude: 42.14375133,
        },
      },
      {
        originValue: '152504.5200000003',
        value: '152504.5200000003',
        fieldId: '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_price]|SUM||',
        geoInfo: false,
      },
      {
        originValue: '21488.82000000012',
        value: '21488.82000000012',
        fieldId:
          '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_shipping_cost]|SUM||',
        geoInfo: false,
      },
    ],
    [
      {
        originValue: '华南',
        value: '华南',
        fieldId:
          '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_area].[Ne70149_area].[Ne70149_area]',
        geoInfo: {
          dimGranularity: 'REGION',
          continent: 'Asia',
          country: 'China',
          region: '华南',
          longitude: 111.0058594,
          latitude: 22.59372606,
        },
      },
      {
        originValue: '219058.29000000158',
        value: '219058.29000000158',
        fieldId: '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_price]|SUM||',
        geoInfo: false,
      },
      {
        originValue: '32353.480000000283',
        value: '32353.480000000283',
        fieldId:
          '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_shipping_cost]|SUM||',
        geoInfo: false,
      },
    ],
    [
      {
        originValue: '西北',
        value: '西北',
        fieldId:
          '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_area].[Ne70149_area].[Ne70149_area]',
        geoInfo: {
          dimGranularity: 'REGION',
          continent: 'Asia',
          country: 'China',
          region: '西北',
          longitude: 89.20898438,
          latitude: 40.44694706,
        },
      },
      {
        originValue: '57555.66000000007',
        value: '57555.66000000007',
        fieldId: '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_price]|SUM||',
        geoInfo: false,
      },
      {
        originValue: '9106.719999999976',
        value: '9106.719999999976',
        fieldId:
          '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_shipping_cost]|SUM||',
        geoInfo: false,
      },
    ],
    [
      {
        originValue: '西南',
        value: '西南',
        fieldId:
          '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_area].[Ne70149_area].[Ne70149_area]',
        geoInfo: {
          dimGranularity: 'REGION',
          continent: 'Asia',
          country: 'China',
          region: '西南',
          longitude: 89.47265625,
          latitude: 31.20340495,
        },
      },
      {
        originValue: '23842.629999999994',
        value: '23842.629999999994',
        fieldId: '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_price]|SUM||',
        geoInfo: false,
      },
      {
        originValue: '3348.209999999997',
        value: '3348.209999999997',
        fieldId:
          '12a45dde-587e-4c35-a1b8-9f3f3457b233.3a470ddd-8a5d-4ba9-880a-432d3e2d0f51.[Ne70149_shipping_cost]|SUM||',
        geoInfo: false,
      },
    ],
  ],
  globalConfig: {
    advancedResult: {
      summarizeResults: [],
      trendLineResults: [],
      anomalyDetectionResults: [],
      forecastResults: [],
      clusteringResults: [],
    },
    annotationResult: {
      measureThresholdResults: [],
      inflectionPointAnnotationResults: [],
    },
    isDrill: false,
    relationDim: null,
    relationType: null,
    env: ['pc'],
    renderMode: 'edit',
  },
  action: {},
};
