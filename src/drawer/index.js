import './index.scss';

import { Component } from 'jinge';

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
    this.__notify('update.active', false);
    this.__notify('closed');
  }
}

export class DrawerContainer extends Component {
  static get template() {
    return `
<div class="md-drawer-container\${className ? ' ' + className : ''}\${active ? ' md-active' : ''}">
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
    this.className = attrs.class;
    this._right = attrs.right;
    this._pushMode = attrs.pushMode;
  }

  onUpdateActive(isActive) {
    this.__notify('update.active', isActive);
  }

  __afterRender() {
    if (!this._pushMode) return;
    const el = this.__firstDOM.children[0]; // .md-drawer
    this.mainMargin = el.offsetWidth;
  }
}
