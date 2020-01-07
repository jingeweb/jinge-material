import './index.scss';

import {
  Component,
  isString,
  isArray,
  getDuration,
  TransitionStates,
  getDurationType,
  __, vm, isNumber, isFunction
} from 'jinge';
import {
  createPopper
} from '@popperjs/core/lib/popper-lite';
import offsetModifier from '@popperjs/core/lib/modifiers/offset';
import preventOverflowModifier from '@popperjs/core/lib/modifiers/preventOverflow';
import {
  mergePopperOpts,
  EnumAttrValidator
} from '../_util';
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
    if ('offset' in attrs) {
      const v = attrs.offset;
      if (v && !(isString(v) || isNumber(v) || Array.isArray(v) || isFunction(v))) {
        throw new Error('<md-popper/> invalid attribute value of "offset"');
      }
    }
    super(attrs);
    this._instance = null;

    this.active = !!attrs.active;
    this.trigger = attrs.trigger || 'click';
    this.delay = Number(attrs.delay || 0);
    this.placement = attrs.placement || 'bottom-start';
    this.offset = attrs.offset || vm([0, 0]);
    this.className = 'md-popover' + (attrs.class ? ' ' + attrs.class : '');
    this.transition = attrs.transition || 'md-popover';
    this.closeOnOutsideClick = attrs.closeOnOutsideClick !== false;
    this._popperOptions = attrs._popperOptions;

    this.isShown = !!this.active;
    this._state = this.isShown ? TransitionStates.ENTERED : TransitionStates.LEAVED;
    this._delayTM = null;
    this._ts = null;
    this._tsEndDeregister = null;
    this._outsideClickDeregister = null;
  }

  get active() {
    return this._active;
  }

  set active(v) {
    if (this._active === v) return;
    this._active = v;
    this.__updateIfNeed();
  }

  __afterRender() {
    this._$ref = this[__].rootNodes[0].__firstDOM;
    if (this._active) {
      this.show();
    }
    if (this.trigger === 'click') {
      this.__domAddListener(this._$ref, 'click', this.toggle);
    } else if (this.trigger === 'hover') {
      this.__domAddListener(this._$ref, 'click', this.hide);
      this.__domAddListener(this._$ref, 'mouseenter', this.show);
      this.__domAddListener(this._$ref, 'mouseleave', this.hide);
    }
  }

  __beforeDestroy() {
    this.hide(true);
  }

  __update() {
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
      this.__notify('update.active', true);
    }
    if (this._state === TransitionStates.ENTERING || this._state === TransitionStates.ENTERED) {
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
      this.__notify('update.active', false);
    }
    if (this._delayTM) {
      clearTimeout(this._delayTM);
      this._delayTM = null;
    }
    if (this._ts) {
      this._onTsEnd(false);
    }
    if (this._state === TransitionStates.LEAVING || this._state === TransitionStates.LEAVED) {
      return;
    }
    if (this.trigger !== 'none' && this._outsideClickDeregister) {
      this._outsideClickDeregister();
      this._outsideClickDeregister = null;
    }
    if (disableTransition === false && this.transition) {
      this._state = TransitionStates.LEAVING;
      this._handleTransition('leave', () => {
        this._doHide();
      });
    } else {
      this._doHide();
    }
  }

  _doHide() {
    this._state = TransitionStates.LEAVED;
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
    this._$pop = this.__getRef('pop');
    if (!this._$pop || isArray(this._$pop)) {
      throw new Error('ref:pop not found.');
    }
    this._state = TransitionStates.ENTERING;

    if (this.trigger !== 'none') {
      this._outsideClickDeregister = this.__domAddListener(document, 'click', this._onOutsideClick);
    }
    this._instance = createPopper(this._$ref, this._$pop, this.getPopperOptions());
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
      this._state = TransitionStates.ENTERED;
    });
  }

  _handleTransition(act, callback) {
    const ce = `${this.transition}-${act}`;
    const ca = `${ce}-active`;
    const el = this._$pop.children[0];
    el.classList.add(ce);
    // force render by calling getComputedStyle
    getDurationType(el);
    el.classList.add(ca);
    const {
      type: tsEndName,
      time: tsDuration
    } = getDuration(el);

    this._ts = [el, ce, ca, tsEndName, callback, null];
    if (!tsEndName) {
      this._onTsEnd();
    } else {
      this._tsEndDeregister = this.__domAddListener(el, tsEndName, this._onTsEnd);
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
    el.classList.remove(ce);
    el.classList.remove(ca);
    if (tsEndName && this._tsEndDeregister) {
      this._tsEndDeregister();
      this._tsEndDeregister = null;
    }
    callCb && callback && callback();
  }

  getPopperOptions() {
    let offset = this.offset;
    if (isString(offset)) {
      offset = offset.split(',').map(so => Number(so));
    } else if (isNumber(offset)) {
      offset = vm([0, offset]);
    }
    if (!isFunction(offset) && offset.length < 2) {
      offset.unshift(0);
    }
    return mergePopperOpts({
      placement: this.placement,
      modifiers: [
        preventOverflowModifier,
        Object.assign({
          options: {
            offset
          }
        }, offsetModifier)
      ],
      onFirstUpdate: this._onPopperCreated.bind(this)
    }, this._popperOptions);
  }
}
