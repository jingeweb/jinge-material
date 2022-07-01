import { Attributes, Component } from 'jinge';
import { registerFocus, deregisterFocus } from '../_util';

import _tpl from './chip.html';

export interface ChipAttrs {
  ripple?: boolean;
  disabled?: boolean;
  deletable?: boolean;
  clickable?: boolean;
  duplicated?: boolean;
}
export class Chip extends Component {
  static template = _tpl;

  ripple: boolean;
  disabled: boolean;
  deletable: boolean;
  clickable: boolean;
  duplicated: boolean;
  rippleActive: boolean;
  hasFocus: boolean;

  constructor(attrs: Attributes<ChipAttrs>) {
    super(attrs);
    this.ripple = attrs.ripple !== false;
    this.rippleActive = false;
    this.hasFocus = false;

    this.disabled = attrs.disabled;
    this.deletable = attrs.deletable;
    this.clickable = attrs.clickable;
    this.duplicated = attrs.duplicated;
  }

  __afterRender() {
    registerFocus(this);
    this.__domPassListeners();
  }

  __beforeDestroy() {
    deregisterFocus(this);
  }

  onDelClick(evt: MouseEvent) {
    this.__notify('delete', evt);
  }
}
