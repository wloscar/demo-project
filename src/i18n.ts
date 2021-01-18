import { I18n } from 'bi-open-sdk';

const { t, i18n } = I18n.init({
  resources: {
    'en-US': {
      显示设置: 'display setting',
      显示图例: 'display legend',
      起始角度: 'start angle',
      请输出起始角度: 'please input start angle',
      '钻取/维度': 'drill / area',
      维度: 'area',
      度量: 'column',
      过滤器: 'filter',
    },
  },
});

/**
 * 国际化词条绑定在全局对象上, meta 和 component 就可以复用
 * 从而减少打包体积
 */
(window as any).biI18n = {
  t,
  i18n,
};

export { t, i18n };
