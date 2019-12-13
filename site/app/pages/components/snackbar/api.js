import {
  VM,
  _t
} from 'jinge';

export default () => VM({
  props: {
    headings: [_t('名称'), _t('描述'), _t('默认值')],
    props: [
      {
        name: 'active',
        type: 'Boolean',
        description: _t('控制消息提示的展示和关闭'),
        defaults: 'false'
      },
      {
        name: 'duration',
        type: 'Number',
        description: _t('设置自动关闭消息提示之前的持续时间（以毫秒为单位）。设置为 0 则不自动关闭，需要手动处理。'),
        defaults: '4000'
      },
      {
        name: 'position',
        type: 'String',
        description: _t('设置消息提示在屏幕底部的位置'),
        defaults: 'null'
      },
      {
        offset: true,
        name: 'position="center"',
        type: 'String',
        description: _t('设置消息提示位于中心位置'),
        defaults: '-'
      },
      {
        offset: true,
        name: 'position="left"',
        type: 'String',
        description: _t('设置消息提示位于左侧位置'),
        defaults: '-'
      }
    ]
  },
  events: {
    headings: [_t('名称'), _t('描述'), _t('参数')],
    props: [
      {
        name: 'opened',
        description: _t('消息提示打开时触发'),
        value: 'null'
      },
      {
        name: 'closed',
        description: _t('消息提示关闭时触发'),
        value: 'null'
      }
    ]
  }
});
