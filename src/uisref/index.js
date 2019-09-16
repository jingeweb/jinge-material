/**
 * 为了解耦 jinge-material 库和 jinge-ui-router 库之间的直接依赖，
 * 在 jinge-material 中重新实现一份 ui-sref 组件。
 *
 * 这个 ui-sref 组件用于 md-button 等组件的内部默认 route 功能。
 *
 * 这个 ui-sref 组件不暴露给用户使用。用户在业务层，
 * 如果需要用到 route 功能，应该主动依赖 jinge-ui-router 库
 * 并使用该库里面的 <ui-sref> 组件。
 *
 * 需要密切关注 jinge-ui-router 库的版本变化，并相应地更新此处代码。
 *
 * jinge-ui-router 最后参考版本： v1.0.3
 */

import {
  Component,
  Symbol,
  GET_CONTEXT,
  UPDATE_IF_NEED,
  AFTER_RENDER,
  BEFORE_DESTROY,
  isObject,
  GET_FIRST_DOM,
  STR_DEFAULT
} from 'jinge';
import {
  ARG_COMPONENTS
} from 'jinge/core/component';
import {
  addEvent,
  removeEvent,
  setAttribute,
  addClass,
  removeClass
} from 'jinge/dom';

/**
 * 此处的 context 名称必须和 jinge-ui-router 库保持一致。
 */
export const UIROUTER_CONTEXT = '#ui-router_context';
export const UIROUTER_CONTEXT_PARENT = '#ui-router_parent';

const ROUTER = Symbol('router');
const EL = Symbol('el');
const TAG = Symbol('tag');
const UPDATE_HREF = Symbol('update_href');
const UPDATE_ACTIVE = Symbol('update_active');
const UPDATE_TARGET = Symbol('update_target');
const CLICK_HANDLER = Symbol('click_handler');
const ON_CLICK = Symbol('on_click');
const DEREGISTER = Symbol('deregister');

const SUPPORTED_TARGETS = ['_blank', '_self'];

export class UISref extends Component {
  static get template() {
    return `
<a
 slot-use:default
 e:class="!className && !(isActive && active) ? _udef : (className || '') + (isActive && active ? (className ? ' ' : '') + active : '')"
 e:style="style"
>
\${text}
</a>`;
  }

  constructor(attrs) {
    if (attrs.params && !isObject(attrs.params)) {
      throw new Error('<ui-sref> attribute "params" require object.');
    }
    if (attrs.target && SUPPORTED_TARGETS.indexOf(attrs.target) < 0) {
      throw new Error(`<ui-sref> attribute "target" only accept one of ${JSON.stringify(SUPPORTED_TARGETS)}`);
    }
    super(attrs);
    const router = this[GET_CONTEXT](UIROUTER_CONTEXT);
    if (!router) {
      throw new Error('<ui-sref> must under parent which has context named Router.CONTEXT_NAME');
    }
    this[ROUTER] = router;

    this[EL] = null;
    this[DEREGISTER] = null;
    this[TAG] = attrs[ARG_COMPONENTS] && attrs[ARG_COMPONENTS][STR_DEFAULT] ? 0 : -1;
    this[CLICK_HANDLER] = this[ON_CLICK].bind(this);
    this.isActive = false;
    this.to = attrs.to;
    this.params = attrs.params;
    this.active = attrs.active;
    this.location = ('location' in attrs) ? attrs.location : true;
    this.reload = !!attrs.reload;
    this.text = attrs.text || '';
    this.target = attrs.target || '_self';
    this.className = attrs.class;
    this.style = attrs.style;
  }

  get target() {
    return this._target;
  }

  set target(v) {
    if (this._target === v) return;
    this._target = v;
    this[UPDATE_IF_NEED](this[UPDATE_TARGET]);
  }

  get to() {
    return this._to;
  }

  set to(v) {
    if (this._to === v) return;
    this._to = v;
    this[UPDATE_IF_NEED](this[UPDATE_HREF]);
  }

  get params() {
    return this._params;
  }

  set params(v) {
    this._params = v;
    this[UPDATE_IF_NEED](this[UPDATE_HREF]);
  }

  get active() {
    return this._active;
  }

  set active(v) {
    if (this._active === v) return;
    if (this[TAG] >= 0 && this._active && this[EL]) {
      removeClass(this[EL], this._active); // remove previous active class
    }
    this._active = v;
    this[UPDATE_IF_NEED](this[UPDATE_ACTIVE]);
  }

  [ON_CLICK](e) {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey) {
      return;
    }
    if (this[TAG] <= 0) {
      e.preventDefault(); // prevent default <a> jump
    }
    const router = this[ROUTER];
    const parent = this[GET_CONTEXT](UIROUTER_CONTEXT_PARENT);
    const parentContext = (parent && parent.context) || router.stateRegistry.root();
    if (this._target === '_blank') {
      const href = router.href(this._to, this._params, {
        relative: parentContext,
        inherit: true
      });
      window.open(href);
    } else {
      router.go(this._to, this._params, {
        relative: parentContext,
        inherit: true,
        location: this.location,
        reload: this.reload
      });
    }
  }

  [AFTER_RENDER]() {
    const el = this[GET_FIRST_DOM]();
    if (this[TAG] >= 0) {
      this[TAG] = el.tagName === 'A' ? 0 : 1;
    }
    this[EL] = el;
    this[DEREGISTER] = this[ROUTER].transitionService.onSuccess({}, () => this[UPDATE_ACTIVE]());
    this[UPDATE_TARGET]();
    this[UPDATE_HREF]();
    this[UPDATE_ACTIVE]();
    addEvent(el, 'click', this[CLICK_HANDLER]);
  }

  [BEFORE_DESTROY]() {
    removeEvent(this[EL], 'click', this[CLICK_HANDLER]);
    this[DEREGISTER]();
  }

  [UPDATE_TARGET]() {
    if (this[TAG] <= 0) {
      setAttribute(this[EL], 'target', this._target);
    }
  }

  [UPDATE_HREF]() {
    const router = this[ROUTER];
    this.isActive = router.includes(this._to, this._params);
    if (this[TAG] <= 0) {
      const parent = this[GET_CONTEXT](UIROUTER_CONTEXT_PARENT);
      const parentContext = (parent && parent.context) || router.stateRegistry.root();
      setAttribute(this[EL], 'href', router.href(this._to, this._params, {
        relative: parentContext,
        inherit: true
      }));
    }
  }

  [UPDATE_ACTIVE]() {
    this.isActive = this[ROUTER].includes(this._to, this._params);
    if (!this._active || this[TAG] < 0) return;
    if (this.isActive) {
      addClass(this[EL], this._active);
    } else {
      removeClass(this[EL], this._active);
    }
  }
}
