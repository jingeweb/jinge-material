import './button.scss';

import {
  Component,
  VM
} from 'jinge';
import {
  ROOT_NODES
} from 'jinge/core/component';
import {
  LISTENERS
} from 'jinge/core/messenger';
import {
  addEvent, removeEvent
} from 'jinge/dom';
import {
  register as focusedRegister,
  deregister as focusedDeregister
} from '../../service/focus';

import _tpl from './button.html';

const IGEVTS = ['touchstart', 'touchmove', 'mousedown'];

export class Button extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.type = attrs.type || 'button';
    this.disabled = attrs.disabled;
    this.className = attrs.class || '';
    this.ripple = attrs.ripple !== false;
    this.rippleActive = false;
    this.hasFocus = false;
    this._eHandlers = null;
  }
  afterRender() {
    focusedRegister(this);
    const lis = this[LISTENERS];
    if (!lis) return;
    const el = this[ROOT_NODES][0];
    lis.forEach((handlers, eventName) => {
      if (IGEVTS.indexOf(eventName) >= 0) return;
      handlers.forEach(fn => {
        const tag = fn.tag || false;
        let handler = fn;
        if (tag && (tag.stop || tag.prevent)) {
          handler = function($evt) {
            fn($evt);
            tag.stop && $evt.stopPropagation();
            tag.prevent && $evt.preventDefault();
          };
        }
        addEvent(el, eventName, handler, tag);
        if (!this._eHandlers) this._eHandlers = [];
        this._eHandlers.push([eventName, handler]);
      });
    });
  }
  // [RENDER]() {
  //   debugger;
  //   return super[RENDER]();
  // } 
  beforeDestroy() {
    focusedDeregister(this);
    if (this._eHandlers) {
      const el = this[ROOT_NODES][0];
      this._eHandlers.forEach(saved => {
        removeEvent(el, saved[0], saved[1]);
      });
      this._eHandlers.length = 0;
    }
  }
  touchstart(event) {
    if (this.ripple && !this.disabled) {
      this.rippleActive = VM({
        _event: event
      });
    }
    this.notify('touchstart', event);
  }
  touchmove(event) {
    if (this.ripple && !this.disabled) {
      this.rippleActive = VM({
        _event: event
      });
    }
    this.notify('touchmove', event);
  }
  mousedown(event) {
    if (this.ripple && !this.disabled) {
      this.rippleActive = VM({
        _event: event
      });
    }
    this.notify('mousedown', event);
  }
}

