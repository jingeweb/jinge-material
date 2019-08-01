import {
  _t,
  Component
} from 'jinge';

import _sty from './nav-menus.scss';

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

export class NavMenu extends Component {
  static get template() {
    return `
<!-- import NavMenu from '.'; -->
<ui-sref active="active" e:to="_menu.state" e:text="_menu.name"/>
<if e:expect="_menu.children">
<div _co:csty class="main-nav-level">
  <for e:loop="_menu.children" vm:each="_subMenu">
  <NavMenu _co:csty e:_menu="_subMenu"/>
  </for>
</div>
</if>`;
  }

  constructor(attrs) {
    super(attrs);
    this._menu = attrs._menu;
  }
}

export class NavMenus extends Component {
  static get template() {
    return `
<!-- import NavMenu from '.'; -->
<div class="main-nav-content">
<for e:loop="_menus" vm:each="menu">
  <NavMenu e:_menu="menu"/>
</for>
</div>
    `;
  }

  static get style() {
    return _sty;
  }

  constructor(attrs) {
    super(attrs);
    this._menus = menus;
  }
}
