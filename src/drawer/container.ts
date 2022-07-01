import './container.scss';

import { Attributes, Component } from 'jinge';

import _tpl from './container.html';

export interface DrawerContainerAttrs {
  active?: boolean;
  right?: boolean;
  pushMode?: boolean;
}
export class DrawerContainer extends Component {
  static template = _tpl;

  active: boolean;
  mainMargin: number;
  right: boolean;
  _pushMode: boolean;

  constructor(attrs: Attributes<DrawerContainerAttrs>) {
    super(attrs);
    this.active = attrs.active;
    this.mainMargin = 0;
    this.right = attrs.right;
    this._pushMode = attrs.pushMode;
  }

  onUpdateActive(isActive: boolean) {
    this.__notify('update.active', isActive);
  }

  __afterRender() {
    if (!this._pushMode) return;
    const el = (this.__firstDOM as HTMLElement).children[0] as HTMLElement; // .md-drawer
    this.mainMargin = el.offsetWidth;
  }
}
