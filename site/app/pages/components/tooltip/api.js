import { vm, _t } from 'jinge';

export default () =>
  vm({
    props: {
      headings: [_t('名称'), _t('描述'), _t('默认值')],
      props: [
        {
          name: 'title',
          description: _t('工具提示的内容'),
          defaults: 'an empty string',
        },
        {
          name: 'trigger',
          description: _t('参看 Popover 组件'),
          defaults: 'hover',
        },
        {
          name: 'placement',
          description: _t('参看 Popover 组件'),
          defaults: 'bottom',
        },
        {
          name: 'delay',
          description: _t('参看 Popover 组件'),
          defaults: '150',
        },
        {
          name: 'offset',
          description: _t('参看 Popover 组件'),
          defaults: '16',
        },
        {
          name: 'className',
          description: _t('参看 Popover 组件'),
          defaults: 'md-tooltip',
        },
      ],
    },
  });
