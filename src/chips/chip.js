import { Component } from 'jinge';
import { registerFocus, deregisterFocus } from '../_util';

import _tpl from './chip.html';

export class Chip extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs, 'md-input');
    this.className = attrs.class;
    this.style = attrs.style;
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

  onDelClick(evt) {
    this.__notify('delete', evt);
  }
}
