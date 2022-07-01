import './index.scss';

import { Attributes, Component } from 'jinge';
import _tpl from './index.html';

export interface OverlayAttrs {
  __portalDisabled?: boolean;
  __portalTarget?: 'body' | HTMLElement;
  active?: boolean;
  fixed?: boolean;
}
export class Overlay extends Component {
  static template = _tpl;

  __portalDisabled: boolean;
  __portalTarget: string | HTMLElement;
  active: boolean;
  fixed: boolean;

  constructor(attrs: Attributes<OverlayAttrs>) {
    super(attrs);
    this.__portalDisabled = attrs.__portalDisabled;
    this.__portalTarget = attrs.__portalTarget || 'body';
    this.active = attrs.active;
    this.fixed = attrs.fixed;
  }

  onClick(evt: MouseEvent) {
    this.__notify('click', evt);
  }
}
