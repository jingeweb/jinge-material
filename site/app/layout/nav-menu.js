import {
  Component
} from 'jinge';

export class NavMenu extends Component {
  static get template() {
    return `
<!-- import NavMenu from '.'; -->
<ui-sref active="active" e:to="_menu.state" e:text="_menu.name"/>
<if e:expect="_menu.children">
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
