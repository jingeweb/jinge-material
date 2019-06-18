import {
  _t
} from 'jinge';

export default {
  props: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'title',
        description: _t('文字提示的内容'),
        defaults: 'an empty string'
      },
      {
        name: 'hideWhenConfirmClick',
        description: _t('点击确认按钮后是否隐藏气泡。'),
        defaults: 'true'
      },
      {
        name: 'confirmSpinner',
        description: _t('是否进入正在确认的加载状态'),
        defaults: 'false'
      },
      {
        name: 'placement',
        description: _t('同 Popover 组件'),
        defaults: 'top-end'
      },
      {
        name: 'offset',
        description: _t('同 Popover 组件'),
        defaults: '16'
      }
    ]
  },
  events: {
    headings: ['Name', 'Description', 'Value'],
    props: [{
      name: 'confirm',
      description: _t('用户点击确认按钮'),
      value: 'undefined'
    }, {
      name: 'cancel',
      description: _t('用户点击取消按钮'),
      value: 'undefined'
    }, {
      name: 'update.active',
      description: _t('同 Popover 组件'),
      value: '(isActive, action)'
    }]
  }
};
