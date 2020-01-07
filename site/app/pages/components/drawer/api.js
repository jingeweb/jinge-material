import {
  _t,
  vm
} from 'jinge';

export default () => vm({
  container: {
    props: {
      headings: [_t('名称'), _t('描述'), _t('默认值')],
      props: [
        {
          name: 'pushMode',
          type: 'Boolean',
          description: _t('将抽屉的打开设置为从侧面推送模式，会挤压内容。'),
          defaults: 'false'
        }
      ]
    }
  },
  drawer: {
    props: {
      headings: [_t('名称'), _t('描述'), _t('默认值')],
      props: [
        {
          name: 'active',
          type: 'Boolean',
          description: _t('控制抽屉的打开和关闭'),
          defaults: 'false'
        },
        {
          name: 'fixed',
          type: 'Boolean',
          description: _t('将 position:fixed 应用于抽屉。可用作应用程序的主抽屉（类似于本文档）。'),
          defaults: 'false'
        },
        {
          name: 'right',
          type: 'Boolean',
          description: _t('将抽屉放置在屏幕的右侧。'),
          defaults: 'false'
        }
      ]
    },
    events: {
      headings: [_t('名称'), _t('描述'), _t('参数')],
      props: [
        {
          name: 'opened',
          description: _t('抽屉打开时触发'),
          value: 'null'
        },
        {
          name: 'closed',
          description: _t('抽屉关闭时触发'),
          value: 'null'
        }
      ]
    }
  }
});
