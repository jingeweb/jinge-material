import {
  Component
} from 'jinge';
import {
  register as focusedRegister,
  deregister as focusedDeregister
} from '../../service/focus';
import {
  ROOT_NODES
} from 'jinge/core/component';
import {
  LISTENERS
} from 'jinge/core/messenger';
import {
  addEvent
} from 'jinge/dom';

import './button.scss';

const IGEVTS = ['touchstart', 'touchmove', 'mousedown'];

export default class Button extends Component {
  constructor(attrs) {
    super(attrs);
    this.type = attrs.type || 'button';
    this.disabled = attrs.disabled;
    this.ripple = attrs.ripple !== false;
    this.rippleActive = false;
    this.hasFocus = false;
  }
  afterRender() {
    focusedRegister(this);
    const lis = this[LISTENERS];
    if (!lis) return;
    const el = this[ROOT_NODES][0];
    lis.forEach((handlers, eventName) => {
      if (IGEVTS.indexOf(eventName) >= 0) return;
      handlers.forEach(fn => {
        addEvent(el, eventName, fn, fn.tag || false);
      });
    });
  }
  beforeDestroy() {
    focusedDeregister(this);
  }
  touchstart(event) {
    if (this.ripple && !this.disabled) {
      this.rippleActive = event;
    }
    this.notify('touchstart', event);
  }
  touchmove(event) {
    if (this.ripple && !this.disabled) {
      this.rippleActive = event;
    }
    this.notify('touchmove', event);
  }
  mousedown(event) {
    if (this.ripple && !this.disabled) {
      this.rippleActive = event;
    }
    this.notify('mousedown', event);
  }
}

