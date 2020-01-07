/* eslint-disable */

/**
 * 为了解耦 jinge-material 库和 jinge-router 库之间的直接依赖，
 * 在 jinge-material 中重新实现一份 <router-link/> 组件并命名为 UISref。
 *
 * 这个 UISref 组件用于 md-button 等组件的内部默认 route 功能。
 *
 * 这个 UISref 组件不暴露给用户使用。用户应该使用 jinge-router 库提供的 <router-link/> 组件。
 *
 * 需要密切关注 jinge-router 库的版本变化，并相应地更新此处代码。
 *
 * jinge-router 最后参考版本： v2.0.0
 */

import { Component, setAttribute, removeEvent, addEvent, __, isObject, watch, unwatch } from 'jinge';

/**
 * @param strict 如果 strict 为 false，则返回 src 是否被 dst 包含；否则返回 src 是否和 dst 完全相同。strict 默认为 true。
 */
export function isParamsOrQuerySameOrInclude(src, dst, strict = true) {
  if (!src)
      return !dst;
  if (!dst)
      return !src;
  let kc = 0;
  for (const k in src) {
      const sv = src[k];
      const dv = dst[k];
      if (strict) {
          if (sv !== dv)
              return false;
      }
      else {
          if (isUndefined(dv) || dv === null) {
              if (!isUndefined(sv) && sv !== null) {
                  return false;
              }
          }
          else if (sv !== dv) {
              return false;
          }
      }
      kc++;
  }
  if (strict && kc !== Object.keys(dst).length) {
      return false;
  }
  return true;
}
export class UISref extends Component {
  constructor(attrs) {
      var _a;
      super(attrs);
      this.to = attrs.to;
      this.text = attrs.text || '';
      this.target = attrs.target || '_self';
      this.replace = !!attrs.replace;
      this.className = attrs.class;
      this.style = attrs.style;
      this.active = attrs.active;
      this._router = this.__getContext('router');
      if (!this._router) {
          throw new Error('Context named "router" not found.');
      }
      this._tag = ((_a = attrs[__].slots) === null || _a === void 0 ? void 0 : _a.default) ? 0 : -1;
      this._el = null;
      this._qw = false; // query is watched
      this._clh = this._onClick.bind(this); // click handler
      this._rch = this._onRc.bind(this);
      this._rcd = null; // router onChange deregister
  }
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
  /**
   * @internal
   *
   * handle router changed event/guard
   */
  _onRc() {
      this._upA();
  }
  get target() {
      return this._target;
  }
  set target(v) {
      if (this._target === v)
          return;
      this._target = v;
      this._upT();
  }
  get active() {
      return this._active;
  }
  set active(v) {
      if (this._active === v)
          return;
      if (this._tag >= 0 && this._active && this._el) {
          this._el.classList.remove(this._active); // remove previous active class
      }
      this._active = v;
      this.__updateIfNeed(this._upA);
  }
  get to() {
      return this._to;
  }
  set to(v) {
      if (this._to === v)
          return;
      this._to = v;
      this.__updateIfNeed(this._upHa);
  }
  /**
   * @internal
   */
  _onClick(e) {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey) {
          return;
      }
      if (this._tag <= 0) {
          e.preventDefault(); // prevent default <a> jump
      }
      this._router.go(this._to, {
          target: this.target,
          replace: this.replace
      });
  }
  __afterRender() {
      const el = this.__firstDOM;
      if (this._tag >= 0) {
          this._tag = el.tagName === 'A' ? 0 : 1;
      }
      this._el = el;
      this._upT();
      this._upHa();
      this._rcd = this._router.afterEach(() => {
          this._onRc();
      });
      addEvent(el, 'click', this._clh);
  }
  __beforeDestroy() {
      removeEvent(this._el, 'click', this._clh);
      this._rcd();
      if (this._qw) {
          unwatch(this._router.__info, 'query.*', this._rch);
      }
  }
  /**
   * @internal
   *
   * update target attribute of link
   */
  _upT() {
      if (this._tag <= 0) {
          setAttribute(this._el, 'target', this.target);
      }
  }
  /**
   * @internal
   *
   * update href and active class
   */
  _upHa() {
      this._upH();
      this._upA();
  }
  /**
   * @internal
   *
   * update href attribute of link
   */
  _upH() {
      if (this._tag <= 0) {
          let href;
          if (!this._to || !(href = this._router.href(this._to))) {
              this._el.removeAttribute('href');
          }
          else {
              setAttribute(this._el, 'href', href);
          }
      }
  }
  /**
   * @internal
   *
   * update active class of link
   */
  _upA() {
      var _a;
      let isActive = this._to && this._router.includes(this._to);
      if (isActive && isObject(this._to) && this._to.query) {
          if (!this._qw) {
              watch(this._router.__info, 'query.*', this._rch);
              this._qw = true;
          }
          isActive = isParamsOrQuerySameOrInclude(this._to.query, (_a = this._router.__info) === null || _a === void 0 ? void 0 : _a.query);
      }
      else if (this._qw) {
          this._qw = false;
          unwatch(this._router.__info, 'query.*', this._rch);
      }
      if (this.isActive === isActive) {
          return;
      }
      this.isActive = isActive;
      if (!this._active || this._tag < 0) {
          return;
      }
      if (this.isActive) {
          this._el.classList.add(this._active);
      }
      else {
          this._el.classList.remove(this._active);
      }
  }
}