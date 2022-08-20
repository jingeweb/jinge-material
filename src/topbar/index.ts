import { Attributes, Component } from 'jinge';

import _tpl from './index.html';
export interface ToolbarAttrs {
  type?: 'center-aligned' | 'small' | 'medium' | 'large';
  elevation?: number | string;
}
export class TopBar extends Component {
  static template = _tpl;

  _type: ToolbarAttrs['type'];
  elev: number | string;

  constructor(attrs: Attributes<ToolbarAttrs>) {
    super(attrs);
    this._type = attrs.type || 'center-aligned';
    this.elev = attrs.elevation;
  }
}
