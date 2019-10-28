import {
  _t,
  Component
} from 'jinge';

import _sty from './nav-content.scss';

const menus = [{
  name: _t('首页'),
  state: 'home'
}, {
  name: _t('[x]快速上手'),
  state: 'getting-started'
}, {
  name: _t('样式主题'),
  state: 'themes',
  children: [{
    name: '[x]概念',
    state: 'themes.concepts'
  }, {
    name: '[x]预定义主题',
    state: 'themes.prebuilt'
  }, {
    name: '[x]自定义主题',
    state: 'themes.custom'
  }]
}, {
  name: _t('UI 元素'),
  state: 'ui',
  children: [{
    name: '[x]阴影（Elevation）',
    state: 'ui.elevation'
  }, {
    name: '[x]布局（Layout）',
    state: 'ui.layout'
  }, {
    name: '[x]文本选中（Selection）',
    state: 'ui.selection'
  }, {
    name: '[x]排版（Typography)',
    state: 'ui.typo'
  }]
}, {
  name: '高级',
  state: 'advance',
  children: [{
    name: _t('[x]路由整合'),
    state: 'advance.with-router'
  }, {
    name: _t('[x]国际化'),
    state: 'advance.i18n'
  // }, {
  //   name: _t('[x]在 React 中使用'),
  //   state: 'advance.react'
  // }, {
  //   name: _t('[x]在 Vue 中使用'),
  //   state: 'advance.vue'
  }]
}, {
  name: _t('组件'),
  state: 'components',
  children: [{
  //   name: _t('[x]顶栏（App Bar）'),
  //   state: 'components.app-bar'
  // }, {
    name: _t('头像（Avatar）'),
    state: 'components.avatar'
  }, {
    name: _t('小提示（badge）'),
    state: 'components.badge'
  }, {
    name: _t('底栏（Bottom Bar）'),
    state: 'components.bottom-bar'
  }, {
    name: _t('按钮 (Button)'),
    state: 'components.button'
  }, {
    name: _t('卡片（Card）'),
    state: 'components.card'
  }, {
    name: _t('内容（Content）'),
    state: 'components.content'
  }, {
    name: _t('日期选择（Datepicker）'),
    state: 'components.datepicker'
  }, {
    name: _t('对话框（Dialog)'),
    state: 'components.dialog'
  }, {
    name: _t('分隔线（Divider）'),
    state: 'components.divider'
  }, {
    name: _t('抽屉（Drawer）'),
    state: 'components.drawer'
  }, {
    name: _t('空提示（Empty State）'),
    state: 'components.empty-state'
  }, {
    name: _t('表单 (Forms)'),
    state: 'components.forms',
    children: [{
      name: _t('自动补全（Autocomplete）'),
      state: 'components.autocomplete'
    }, {
      name: _t('多选框 (Checkbox)'),
      state: 'components.checkbox'
    }, {
      name: _t('纸片（Chips）'),
      state: 'components.chips'
    }, {
      name: _t('文件选择（File）'),
      state: 'components.file'
    }, {
      name: _t('文本框（Input & Textarea）'),
      state: 'components.input'
    }, {
      name: _t('单选项 (Radio)'),
      state: 'components.radio'
    }, {
      name: _t('下拉选择 (Select)'),
      state: 'components.select'
    }, {
      name: _t('切换 (Switch)'),
      state: 'components.switch'
    }]
  }, {
    name: _t('文本高亮（Highlight）'),
    state: 'components.highlight'
  }, {
    name: _t('图标（Icon）'),
    state: 'components.icon'
  }, {
    name: _t('列表（List）'),
    state: 'components.list'
  }, {
    name: _t('菜单（Menu）'),
    state: 'components.menu'
  }, {
    name: _t('进度条（Progress）'),
    state: 'components.progress'
  }, {
    name: _t('消息提示（Snackbar）'),
    state: 'components.snackbar'
  }, {
    name: _t('正在加载（Spinner）'),
    state: 'components.spinner'
  }, {
    name: _t('步骤条（Steppers）'),
    state: 'components.steppers'
  }, {
    name: _t('子标题（Subheader）'),
    state: 'components.subheader'
  }, {
    name: _t('分页（Pagination）'),
    state: 'components.pagination'
  }, {
    name: _t('表格（Table）'),
    state: 'components.table'
  }, {
    name: _t('标签页（Tabs）'),
    state: 'components.tabs'
  }, {
    name: _t('工具栏（Toolbar）'),
    state: 'components.toolbar'
  }, {
    name: _t('气泡提示（Popover）'),
    state: 'components.popover'
  }, {
    name: _t('悬浮提示（Tooltip）'),
    state: 'components.tooltip'
  }]
}, {
  name: _t('关于'),
  state: 'about'
}, {
  name: _t('许可证'),
  state: 'license'
}];

export class NavContent extends Component {
  static get template() {
    return `
<!-- import { NavMenu } from './nav-menu.js'; -->
<div class="main-nav-content">
<p class="todo-tip"><md-icon-info/>菜单前带 [x] 表示尚未完成</p>
<for e:loop="_menus" vm:each="menu">
  <NavMenu e:_menu="menu"/>
</for>
</div>`;
  }

  static get style() {
    return _sty;
  }

  constructor(attrs) {
    super(attrs);
    this._menus = menus;
  }
}
