import {
  _t
} from 'jinge';

export default {
  props: {
    headings: ['Name', 'Description', 'Default'],
    props: [
      {
        name: 'active',
        type: 'Boolean',
        description: _t('控制气泡卡片是否展示。外部父组件可通过此属性手动控制。'),
        defaults: 'false'
      },
      {
        name: 'trigger',
        type: 'String',
        description: _t('气泡卡片的触发方式，包括 click, hover 和 none。如果指定为 none，代表气泡卡片不自动绑定触发元素，完全靠 active 属性控制。'),
        defaults: 'click'
      },
      {
        name: 'delay',
        type: 'Number',
        description: _t('卡片在延迟一定的时间后显示，单位为毫秒。'),
        defaults: '0'
      },
      {
        name: 'placement',
        type: 'String',
        description: _t('卡片显示时的相对位置，参看 Popper.js 的 placement 概念。'),
        defaults: 'bottom-start'
      },
      {
        name: 'offset',
        type: 'Number/String',
        description: _t('卡片显示时的偏移量，参看 Popper.js 的 offset 概念。'),
        defaults: '0'
      },
      {
        name: 'className',
        type: 'String',
        description: _t('附加在卡片的 DOM 上的 html class。'),
        defaults: 'an empty string'
      },
      {
        name: 'transition',
        type: 'String',
        description: _t('卡片显示和隐藏时的 css 动画。'),
        defaults: 'md-popover'
      },
      {
        name: 'closeWhenOutsideClidk',
        type: 'Boolean',
        description: _t('点击卡片之外的其它区域时，是否隐藏卡片。'),
        defaults: 'true'
      },
      {
        name: '_popperOptions',
        type: 'Object',
        description: _t('Popper.js 的更多自定义高级配置。'),
        defaults: 'null'
      }
    ]
  },
  classes: {
    headings: ['Name', 'Description'],
    props: [{
      name: 'md-popover-title',
      description: _t('用于控制气泡里面顶部的标题样式。')
    }, {
      name: 'md-popover-content',
      description: _t('控制气泡里面中间的内容样式。')
    }, {
      name: 'md-popover-ctrl',
      description: _t('控制气泡里面底部的按钮区域样式。')
    }]
  },
  events: {
    headings: ['Name', 'Description', 'Value'],
    props: [{
      name: 'update.active',
      description: _t('气泡显示或隐藏时的事件'),
      value: 'active'
    }]
  }
};
