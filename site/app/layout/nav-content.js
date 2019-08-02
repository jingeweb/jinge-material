import {
  _t,
  Component
} from 'jinge';

import _sty from './nav-content.scss';

const menus = [{
  name: _t('首页'),
  state: 'home'
}, {
  name: _t('快速上手'),
  state: 'getting-started'
}, {
  name: _t('组件'),
  state: 'components',
  children: [{
    name: _t('按钮 (Button)'),
    state: 'components.button'
  }, {
    name: _t('表单 (Forms)'),
    state: 'components.forms',
    children: [{
      name: _t('多选框 (Checkbox)'),
      state: 'components.checkbox'
    }, {
      name: _t('单选项 (Radio)'),
      state: 'components.radio'
    }]
  }]
}, {
  name: _t('关于'),
  state: 'about'
}, {
  name: _t('许可'),
  state: 'license'
}];

export class NavContent extends Component {
  static get template() {
    return `
<!-- import { NavMenu } from './nav-menu.js'; -->
<div class="main-nav-content">
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
