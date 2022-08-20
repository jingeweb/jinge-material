/* eslint-disable */

// 为了解耦 jinge-material 库和 jinge-router 库之间的直接依赖（使用 jinge-material 不一定必须要使用 jinge-router），在 jinge-material 中重新实现一份 <router-link/> 组件并命名为 UISref。
// 这个 UISref 组件用于 md-button 等组件的内部默认 route 功能，不暴露给用户使用。用户应该使用 jinge-router 库提供的 <router-link/> 组件。
// 但 ts 类型没有必要重复书写，因此将 jinge-router 以 dev dep 的方式依赖。

import {
  Component,
  setAttribute,
  __,
  isObject,
  Attributes,
  isUndefined,
} from 'jinge';
import { RouteJumpTarget, RouteParamsOrQuery, RouteLocation, Router } from 'jinge-router';
import { vmWatch } from '../_util';
import _tpl from './index.html';

/**
 * 从 jinge-router/src/util.ts 拷贝的函数，用于判定 url 是否包含。
 */
export function isParamsOrQuerySameOrInclude(src: RouteParamsOrQuery, dst: RouteParamsOrQuery, strict = true): boolean {
  if (!src) return !dst;
  if (!dst) return !src;
  let kc = 0;
  for (const k in src) {
    const sv = src[k];
    const dv = dst[k];
    if (strict) {
      if (sv !== dv) return false;
    } else {
      if (isUndefined(dv) || dv === null) {
        if (!isUndefined(sv) && sv !== null) {
          return false;
        }
      } else if (sv !== dv) {
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

export class Sref extends Component {
  static template = _tpl;

  href?: string;
  _router: Router;
  _el: HTMLElement;
  _target: RouteJumpTarget;
  _to: string | RouteLocation;

  /**
   * query watched deregister function
   */
  _qw?: () => void;


  replace: boolean;
  active?: string;

  constructor(
    attrs: Attributes<{
      to: string | RouteLocation;
      href?: string;
      target: RouteJumpTarget;
      replace: boolean;
      active?: string;
    }>,
  ) {
    if (attrs.to && attrs.href) {
      // to 和 href 只能指定一个，指定 to 代表 jinge-router 路由，指定 href 代表直接浏览器跳转。
      throw new Error('conflict: `to` or `href`')
    }
    super(attrs);

    this.to = attrs.to;
    this.href = attrs.href;
    this.target = attrs.target || '_self';
    this.replace = !!attrs.replace;
    this.active = attrs.active || 'md-active';

    this._router = this.__getContext('router') as Router;
    if (!this._router) {
      throw new Error('Context named "router" not found.');
    }
  }

  /**
   * @internal
   *
   * handle router changed event/guard
   */
  _onRc() {
    this._upA();
  }

  get target(): RouteJumpTarget {
    return this._target;
  }

  set target(v: RouteJumpTarget) {
    if (this._target === v) return;
    this._target = v;
    this._upT();
  }

  get to(): string | RouteLocation {
    return this._to;
  }

  set to(v: string | RouteLocation) {
    if (this._to === v) return;
    this._to = v;
    this.__updateIfNeed(this._upHa);
  }

  /**
   * @internal
   */
  _onClick(e: Event) {
    if (e.defaultPrevented || (e as KeyboardEvent).metaKey || (e as KeyboardEvent).ctrlKey) {
      return;
    }
    if (this._to) {
      e.preventDefault(); // prevent default <a> jump
      this._router.go(this._to, {
        target: this.target,
        replace: this.replace,
      });
    }
  }

  __afterRender() {
    const el = this.__firstDOM as HTMLElement;
    this._el = el;
    this._upT();
    this._upHa();
    this.__domAddListener(this._el, 'click', (evt) => this._onClick(evt));
    this.__addDeregisterFn(this._router.afterEach(() => {
      this._onRc();
    }));
  }

  __beforeDestroy() {
    this._qw?.();
  }

  /**
   * @internal
   *
   * update target attribute of link
   */
  _upT() {
    this._el && setAttribute(this._el, 'target', this.target);
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
    let href = this.href;
    if (!href && (!this._to || !(href = this._router.href(this._to)))) {
      this._el.removeAttribute('href');
    } else {
      setAttribute(this._el, 'href', href);
    }
  }

  /**
   * @internal
   *
   * update active class of link
   */
  _upA() {
    if (!this._to) return;
    let isActive = this._router.includes(this._to);
    if (isActive && isObject(this._to) && (this._to as RouteLocation).query) {
      if (!this._qw) {
        this._qw = vmWatch(this._router.__info, 'query.*', () => this._onRc());
      }
      isActive = isParamsOrQuerySameOrInclude((this._to as RouteLocation).query, this._router.__info?.query);
    } else if (this._qw) {
      this._qw();
      this._qw = null;
    }
    this.active && this._el.classList[isActive ? 'add' : 'remove'](this.active);
    this.__notify('active', isActive);
  }
}
