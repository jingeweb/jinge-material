import {
  Component,
  AFTER_RENDER,
  BEFORE_DESTROY,
  NOTIFY
} from 'jinge';
import {
  bindDOMListeners,
  unbindDOMListeners
} from 'jinge/core/component';
import {
  registerFocus,
  deregisterFocus
} from '../_util';

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

    this.disabled = attrs.disable;
    this.deletable = attrs.deletable;
    this.clickable = attrs.clickable;
    this.duplicated = attrs.duplicated;
  }

  [AFTER_RENDER]() {
    registerFocus(this);
    bindDOMListeners(this);
  }

  [BEFORE_DESTROY]() {
    deregisterFocus(this);
    unbindDOMListeners(this);
  }

  onDelClick(evt) {
    this[NOTIFY]('delete', evt);
  }
}
