import React from 'react';
import { UISchemaLite } from 'ui-schema-lite';
import './SettingPanel.scss';
import 'antd/dist/antd.css';
import 'ui-schema-editors/dist/module/index.css';
import 'ui-schema-lite/dist/module/index.css';
import { editors } from 'ui-schema-editors';
import { useAppContext } from '../context';

export const SettingPanel: React.FC = React.memo(props => {
  return (
    <div className="demo-setting-panel-wrapper">
      <UISchemaLite
        editors={editors}
        schema={{
          title: '用户信息',
          type: 'object',
          props: {
            mode: 'collapse',
          },
          properties: {
            advancedConfig: {
              title: '高级设置',
              type: 'object',
              props: {
                mode: 'tab',
              },
              properties: {
                str: {
                  title: 'str',
                  type: 'string',
                  defaultValue: '23',
                  props: {
                    placeholder: '显示副标题',
                    textArea: true,
                    showCopyBtn: true,
                  },
                },
                showSubTitle: {
                  title: 'a',
                  type: 'checkbox',
                  defaultValue: false,
                  redirect: 'showSubTitle',
                  props: {
                    label: '显示副标题',
                    mode: 'single',
                  },
                },
                showCrumbs: {
                  title: 'b',
                  type: 'checkbox',
                  redirect: 'showCrumbs',
                  props: {
                    label: '菜单层级面包屑展示',
                    mode: 'single',
                  },
                },
                multiSelect: {
                  type: 'multi-select',
                  title: '复选',
                  defaultValue: ['2', '3'],
                  props: {
                    locales: {
                      vvvvv: 'awdf',
                    },
                    options: [
                      { text: '1', value: '1' },
                      { text: '2', value: '2' },
                      { text: '3', value: '3' },
                      { text: '4', value: '4' },
                      { text: '5', value: '5' },
                      { text: '6', value: '6' },
                      { text: '7', value: '7' },
                    ],
                    style: { width: '100%' },
                    hasSelectAll: true,
                  },
                },
                multiSelect2: {
                  type: 'multi-select',
                  title: '复选2',
                  props: {
                    options: [
                      { text: '订单来源1', value: '1' },
                      { text: '订单来源2', value: '2' },
                      { text: '订单来源3', value: '3' },
                      { text: '订单来源4', value: '4' },
                      { text: '订单来源5', value: '5' },
                      { text: '订单来源6', value: '6' },
                      { text: '订单来源7', value: '7' },
                    ],
                    style: { width: '200px' },
                    hasSelectAll: true,
                    showSearch: true,
                  },
                },
                multiSelect3: {
                  type: 'modal',
                  title: '复选2',
                  props: {
                    label: 'modal',
                    ModalContent: () => <div>asdf</div>,
                  },
                },
                ranges: {
                  type: 'color-data-ranges',
                  title: 'color-data-range',
                  redirect: 'colorRange',
                  defaultValue: {
                    ranges: 2,
                    maxAuto: true,
                    minAuto: true,
                    autoRange: true,
                    optimize: true,
                    rangeValues: [],
                  },
                  props: {
                    showRangeName: true,
                    percentValue: true,
                    dataRange: [0, 1000],
                    showTip: true,
                  },
                },
              },
            },
          },
        }}
      ></UISchemaLite>
    </div>
  );
});
