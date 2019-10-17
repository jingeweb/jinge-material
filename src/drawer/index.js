import './index.scss';

import {
  Component,
  NOTIFY,
  AFTER_RENDER,
  GET_FIRST_DOM
} from 'jinge';

import _tpl from './index.html';

export class Drawer extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.active = attrs.active;
    this._fixed = attrs.fixed;
    this._right = attrs.right;
    this._pushMode = attrs._pushMode;
  }

  close() {
    this.active = false;
    this[NOTIFY]('update.active', false);
  }
}

export class DrawerContainer extends Component {
  static get template() {
    return `
<div class="md-drawer-container\${active ? ' md-active' : ''}">
  <md-drawer e:_pushMode="_pushMode" e:active="active" e:right="_right" on:update.active="onUpdateActive">
    <_slot slot-use:drawer/>
  </md-drawer>
  <div style="margin-\${_right ? 'right' : 'left'}: \${active ? mainMargin : 0}px;" class="md-drawer-main">
    <_slot slot-use:main/>
  </div>
</div>`;
  }

  constructor(attrs) {
    super(attrs);
    this.active = attrs.active;
    this.mainMargin = 0;
    this._right = attrs.right;
    this._pushMode = attrs.pushMode;
  }

  onUpdateActive(isActive) {
    this[NOTIFY]('update.active', isActive);
  }

  [AFTER_RENDER]() {
    if (!this._pushMode) return;
    const el = this[GET_FIRST_DOM]().children[0]; // .md-drawer
    this.mainMargin = el.offsetWidth;
  }
}
