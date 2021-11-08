import { Component } from 'jinge';

export class NavMenu extends Component {
  static get template() {
    return `
<!-- import NavMenu from '.'; -->
<router-link active="active" e:to="_menu.state">
  <a>
    <span>\${_menu.name}</span>
    <if e:expect="_menu.tip">
    <span class="tip">\${_menu.tip}</span>
    </if>
  </a>
</router-link>
<if e:expect="!!_menu.children">
<div class="main-nav-level">
  <for e:loop="_menu.children" vm:each="_subMenu">
  <NavMenu e:_menu="_subMenu"/>
  </for>
</div>
</if>`;
  }

  constructor(attrs) {
    super(attrs);
    this._menu = attrs._menu;
  }
}
