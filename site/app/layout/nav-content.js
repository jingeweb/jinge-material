import {
  VM,
  _t,
  I18N_WATCH,
  Component
} from 'jinge';

import _sty from './nav-content.scss';

let aid = 0;
function generateMenus() {
  function loopName(arr) {
    arr.forEach(m => {
      m.key = `m-${aid++}`;
      const i = m.name.indexOf('|');
      if (i > 0) {
        m.tip = m.name.substring(i + 1);
        m.name = m.name.substring(0, i);
      }
      m.children && loopName(m.children);
    });
    return arr;
  }
  return loopName([{
    name: _t('首页'),
    state: 'home'
  }, {
    name: _t('快速上手'),
    state: 'getting-started'
  }, {
    name: _t('主题'),
    state: 'theme'
  }, {
    name: _t('路由整合'),
    state: 'use-router'
  }, {
    name: _t('国际化'),
    state: 'i18n'
  }, {
    name: _t('UI 规范'),
    state: 'ui',
    children: [{
      name: _t('阴影|Elevation'),
      state: 'ui.elevation'
    }, {
      name: _t('布局|Layout'),
      state: 'ui.layout'
    }, {
      name: _t('版式|Typography'),
      state: 'ui.typography'
    }, {
      name: _t('状态|States'),
      state: 'ui.states'
    }]
  }, {
    name: _t('组件'),
    state: 'components',
    children: [{
    //   name: _t('顶栏 App Bar'),
    //   state: 'components.app-bar'
    // }, {
      name: _t('头像|Avatar'),
      state: 'components.avatar'
    }, {
      name: _t('徽章|Badge'),
      state: 'components.badge'
    }, {
      name: _t('底栏|Bottom Bar'),
      state: 'components.bottom-bar'
    }, {
      name: _t('按钮|Button'),
      state: 'components.button'
    }, {
      name: _t('卡片|Card'),
      state: 'components.card'
    }, {
      name: _t('内容|Content'),
      state: 'components.content'
    }, {
      name: _t('日期选择|Datepicker'),
      state: 'components.datepicker'
    }, {
      name: _t('对话框|Dialog'),
      state: 'components.dialog'
    }, {
      name: _t('分隔线|Divider'),
      state: 'components.divider'
    }, {
      name: _t('抽屉|Drawer'),
      state: 'components.drawer'
    }, {
      name: _t('空提示|Empty State'),
      state: 'components.empty-state'
    }, {
      name: _t('表单|Forms'),
      state: 'components.forms',
      children: [{
        name: _t('自动补全|Autocomplete'),
        state: 'components.autocomplete'
      }, {
        name: _t('多选框|Checkbox'),
        state: 'components.checkbox'
      }, {
        name: _t('纸片|Chips'),
        state: 'components.chips'
      }, {
        name: _t('文件选择|File'),
        state: 'components.file'
      }, {
        name: _t('文本框|Input & Textarea'),
        state: 'components.input'
      }, {
        name: _t('单选项|Radio'),
        state: 'components.radio'
      }, {
        name: _t('下拉选择|Select'),
        state: 'components.select'
      }, {
        name: _t('切换|Switch'),
        state: 'components.switch'
      }]
    }, {
      name: _t('文本高亮|Highlight'),
      state: 'components.highlight'
    }, {
      name: _t('图标|Icon'),
      state: 'components.icon'
    }, {
      name: _t('列表|List'),
      state: 'components.list'
    }, {
      name: _t('菜单|Menu'),
      state: 'components.menu'
    }, {
      name: _t('分页|Pagination'),
      state: 'components.pagination'
    }, {
      name: _t('气泡确认框|Popconfirm'),
      state: 'components.popconfirm'
    }, {
      name: _t('气泡卡片|Popover'),
      state: 'components.popover'
    }, {
      name: _t('进度条|Progress'),
      state: 'components.progress'
    }, {
      name: _t('消息提示|Snackbar'),
      state: 'components.snackbar'
    }, {
      name: _t('正在加载|Spinner'),
      state: 'components.spinner'
    }, {
      name: _t('步骤条|Steppers'),
      state: 'components.steppers'
    }, {
      name: _t('子标题|Subheader'),
      state: 'components.subheader'
    }, {
      name: _t('表格|Table'),
      state: 'components.table'
    }, {
      name: _t('标签页|Tabs'),
      state: 'components.tabs'
    }, {
      name: _t('工具栏|Toolbar'),
      state: 'components.toolbar'
    }, {
      name: _t('工具提示|Tooltip'),
      state: 'components.tooltip'
    }]
  }, {
    name: _t('关于'),
    state: 'about'
  }, {
    name: _t('许可证'),
    state: 'license'
  }]);
}

export class NavContent extends Component {
  static get template() {
    return `
<!-- import { NavMenu } from './nav-menu.js'; -->
<div class="main-nav-content">
<for e:loop="menus" key="each.key" vm:each="_menu">
  <NavMenu e:_menu="_menu"/>
</for>
</div>`;
  }

  static get style() {
    return _sty;
  }

  constructor(attrs) {
    super(attrs);

    this[I18N_WATCH](() => {
      this.menus = VM(generateMenus());
    }, true);
  }
}
