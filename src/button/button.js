import './button.scss';

import {
  Component,
  VM,
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

import _tpl from './button.html';

const IGNORED_EVENTS = [
  'touchstart', 'touchmove', 'mousedown'
];

export class Button extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this._tag = attrs.to ? 'sref' : (
      attrs.href ? 'a' : 'button'
    );
    this.to = attrs.to || '';
    this.target = attrs.target || '_self';
    this.href = attrs.href || '';
    this.params = attrs.params;
    this.active = attrs.active;

    this.type = attrs.type || 'button';
    this.style = attrs.style;
    this.disabled = attrs.disabled;
    this.className = attrs.class;
    this.ripple = attrs.ripple !== false;
    this.rippleActive = false;
    this.hasFocus = false;
  }

  [AFTER_RENDER]() {
    registerFocus(this);
    bindDOMListeners(this, IGNORED_EVENTS);
  }

  [BEFORE_DESTROY]() {
    deregisterFocus(this);
    unbindDOMListeners(this);
  }

  touchstart(event) {
    if (this.ripple && !this.disabled) {
      this.rippleActive = VM({
        _event: event
      });
    }
    this[NOTIFY]('touchstart', event);
  }

  touchmove(event) {
    if (this.ripple && !this.disabled) {
      this.rippleActive = VM({
        _event: event
      });
    }
    this[NOTIFY]('touchmove', event);
  }

  mousedown(event) {
    if (this.ripple && !this.disabled) {
      this.rippleActive = VM({
        _event: event
      });
    }
    this[NOTIFY]('mousedown', event);
  }
}
