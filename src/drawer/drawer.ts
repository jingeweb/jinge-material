import { Attributes, Component } from 'jinge';

import _tpl from './drawer.html';

export interface DrawerAttrs {
  active?: boolean;
  fixed?: boolean;
  right?: boolean;
  _pushMode?: boolean;
}
export class Drawer extends Component {
  static template = _tpl;

  active: boolean;
  fixed: boolean;
  right: boolean;
  _pushMode: boolean;

  constructor(attrs: Attributes<DrawerAttrs>) {
    super(attrs);
    this.active = attrs.active;
    this.fixed = attrs.fixed;
    this.right = attrs.right;
    this._pushMode = attrs._pushMode;
  }

  close() {
    this.active = false;
    this.__notify('update.active', false);
    this.__notify('closed');
  }
}
