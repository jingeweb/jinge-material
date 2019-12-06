import './button.scss';

import {
  Component,
  VM,
  AFTER_RENDER,
  BEFORE_DESTROY,
  NOTIFY,
  DOM_PASS_LISTENERS
} from 'jinge';
import {
  registerFocus,
  deregisterFocus
} from '../_util';

import _tpl from './button.html';

const IGNORED_EVENTS = [
  'touchstart', 'mousedown'
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

    /**
     * 在移动设备上，同一次的 Touch，<button> 依次触发 touchstart 和 mousedown 两个事件。
     * 参看：https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent
     * 为了避免重复处理事件，通过记录 Event 的 timeStamp 属性来判断 mousedown 是否跟前一次的
     * touchstart 是同一个事件。注意不能用 preventDefault 的方式来阻止 mousedown 事件，
     * 因为 UI 组件会被业务层使用，业务层有可能会在移动设备上也只用 mousedown 事件。
     */
    this._ts = -1;
  }

  [AFTER_RENDER]() {
    registerFocus(this);
    this[DOM_PASS_LISTENERS](IGNORED_EVENTS);
  }

  [BEFORE_DESTROY]() {
    deregisterFocus(this);
  }

  touchstart(event) {
    if (this.ripple && !this.disabled) {
      this._ts = event.timeStamp;
      this.rippleActive = VM({
        _event: event
      });
    }
    this[NOTIFY]('touchstart', event);
  }

  mousedown(event) {
    if (this.ripple && !this.disabled && this._ts !== event.timeStamp) {
      this.rippleActive = VM({
        _event: event
      });
    }
    this[NOTIFY]('mousedown', event);
  }
}
