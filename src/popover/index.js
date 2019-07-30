import './index.scss';

import {
  Component,
  AFTER_RENDER,
  BEFORE_DESTROY,
  GET_FIRST_DOM,
  GET_REF,
  ROOT_NODES,
  UPDATE_IF_NEED,
  UPDATE,
  NOTIFY
} from 'jinge';
import {
  mergePopperOpts,
  EnumAttrValidator
} from '../_util';
import Popper from 'popper.js';
import {
  addEvent,
  removeEvent,
  addClass,
  removeClass
} from 'jinge/dom';
import {
  assertFail,
  isString
} from 'jinge/util';
import {
  getDuration,
  TS_STATE_ENTERED,
  TS_STATE_ENTERING,
  TS_STATE_LEAVED,
  TS_STATE_LEAVING,
  getDurationType
} from 'jinge/core/transition';

import _tpl from './index.html';

const triggerValidator = new EnumAttrValidator(
  '<md-popover>',
  'trigger', [
    'click', 'hover', 'none'
  ]
);

export class Popover extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    triggerValidator.assert(attrs);
    super(attrs);
    this._instance = null;

    this.active = !!attrs.active;
    this.trigger = attrs.trigger || 'click';
    this.delay = Number(attrs.delay || 0);
    this.placement = attrs.placement || 'bottom-start';
    this.offset = attrs.offset || 0;
    this.className = 'md-popover' + (attrs.class ? ' ' + attrs.class : '');
    this.transition = attrs.transition || 'md-popover';
    this.closeOnOutsideClick = attrs.closeOnOutsideClick !== false;
    this._popperOptions = attrs._popperOptions;

    this.isShown = !!this.active;
    this._state = this.isShown ? TS_STATE_ENTERED : TS_STATE_LEAVED;
    this._delayTM = null;
    this._ts = null;
    this._tsEndHandler = this._onTsEnd.bind(this);
    this._outsideClickHandler = this._onOutsideClick.bind(this);
  }

  get active() {
    return this._active;
  }

  set active(v) {
    if (this._active === v) return;
    this._active = v;
    this[UPDATE_IF_NEED]();
  }

  [AFTER_RENDER]() {
    this._$ref = this[ROOT_NODES][0][GET_FIRST_DOM]();
    if (this._active) {
      this.show();
    }
    if (this.trigger === 'click') {
      addEvent(this._$ref, 'click', this.toggle.bind(this));
    } else if (this.trigger === 'hover') {
      addEvent(this._$ref, 'mouseenter', this.show.bind(this));
      addEvent(this._$ref, 'mouseleave', this.hide.bind(this));
    }
  }

  [BEFORE_DESTROY]() {
    this.hide(true);
  }

  [UPDATE]() {
    if (this._active) {
      this.show();
    } else {
      this.hide();
    }
  }

  toggle() {
    if (this.isShown) {
      this.hide();
    } else {
      this.show();
    }
  }

  show() {
    if (!this._active) {
      this._active = true;
      this[NOTIFY]('update.active', true);
    }
    if (this._state === TS_STATE_ENTERING || this._state === TS_STATE_ENTERED) {
      return;
    }
    if (this._ts) {
      this._onTsEnd(false);
    }
    if (this._delayTM) {
      clearTimeout(this._delayTM);
      this._delayTM = null;
    }
    if (this.delay > 0) {
      this._delayTM = setTimeout(() => {
        this.isShown = true;
      }, this.delay);
    } else {
      this.isShown = true;
    }
  }

  hide(disableTransition = false) {
    if (this._active) {
      this._active = false;
      this[NOTIFY]('update.active', false);
    }
    if (this._delayTM) {
      clearTimeout(this._delayTM);
      this._delayTM = null;
    }
    if (this._ts) {
      this._onTsEnd(false);
    }
    if (this._state === TS_STATE_LEAVING || this._state === TS_STATE_LEAVED) {
      return;
    }
    if (this.trigger !== 'none') {
      removeEvent(document, 'click', this._outsideClickHandler);
    }
    if (disableTransition === false && this.transition) {
      this._state = TS_STATE_LEAVING;
      this._handleTransition('leave', () => {
        this._doHide();
      });
    } else {
      this._doHide();
    }
  }

  _doHide() {
    this._state = TS_STATE_LEAVED;
    this.isShown = false;
    this._instance.destroy();
    this._instance = null;
    this._$pop = null;
  }

  _onIfSwitched(trueBranch) {
    if (!trueBranch) return;
    this._doShow();
  }

  _doShow() {
    this._$pop = this[GET_REF]('pop');
    if (!this._$pop) assertFail();
    this._state = TS_STATE_ENTERING;

    if (this.trigger !== 'none') {
      addEvent(document, 'click', this._outsideClickHandler);
    }
    this._instance = new Popper(this._$ref, this._$pop, this.getPopperOptions());
  }

  _onOutsideClick(evt) {
    if (!this.closeOnOutsideClick) {
      return;
    }
    const $el = evt.target;
    if (this._$ref.contains($el) || this._$pop.contains($el)) {
      return;
    }
    this.hide();
  }

  _onPopperCreated() {
    if (!this.transition) return;
    this._handleTransition('enter', () => {
      this._state = TS_STATE_ENTERED;
    });
  }

  _handleTransition(act, callback) {
    const ce = `${this.transition}-${act}`;
    const ca = `${ce}-active`;
    const el = this._$pop.children[0];
    addClass(el, ce);
    // force render by calling getComputedStyle
    getDurationType(el);
    addClass(el, ca);
    const [tsEndName, tsDuration] = getDuration(el);
    this._ts = [el, ce, ca, tsEndName, callback, null];
    if (!tsEndName) {
      this._tsEndHandler();
    } else {
      addEvent(el, tsEndName, this._tsEndHandler);
      /**
       * 当快速划过鼠标时，浏览器触发 transitionend 事件。需要用 setTimeout 来双重保障。
       */
      this._ts[this._ts.length - 1] = setTimeout(this._tsEndHandler, tsDuration + 50);
    }
  }

  _onTsEnd(callCb = true) {
    if (!this._ts) {
      return;
    }
    const [el, ce, ca, tsEndName, callback, tm] = this._ts;
    if (tm) clearTimeout(tm);
    this._ts = null;
    removeClass(el, ce);
    removeClass(el, ca);
    tsEndName && removeEvent(el, tsEndName, this._tsEndHandler);
    callCb && callback && callback();
  }

  getPopperOptions() {
    let offset = this.offset;
    if (isString(offset)) {
      if (/^-?\d+$/.test(offset)) {
        offset = '0,' + Number(offset);
      }
    } else {
      offset = '0,' + offset;
    }
    return mergePopperOpts({
      placement: this.placement,
      modifiers: {
        preventOverflow: {
          boundariesElement: 'viewport',
          padding: 16
        },
        offset: {
          offset
        }
      },
      onCreate: this._onPopperCreated.bind(this)
    }, this._popperOptions);
  }
}
