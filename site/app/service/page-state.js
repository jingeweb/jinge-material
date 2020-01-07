import {
  Messenger
} from 'jinge';
import {
  getEnv
} from './env';

const baseHref = getEnv('meta').public;

export const TITLE_CHANGED = Symbol('title-changed');
export const IS_SPLASH_CHANGED = Symbol('is-splash-changed');

function isHome(pathname) {
  if (baseHref !== '/' && pathname.startsWith(baseHref)) {
    pathname = pathname.substring(baseHref.length - 1);
  }
  return pathname === '/' || pathname === '/zh_cn/' || pathname === '/en/';
}

class PageStateManager extends Messenger {
  constructor() {
    super();
    this._title = '';
    this._splash = isHome(location.pathname);
  }

  get title() {
    return this._title;
  }

  set title(v) {
    if (this._title === v) return;
    this._title = v ? (v + ' - Jinge Material') : 'Jinge Material';
    document.title = this._title;
    this.__notify('title-change', v);
  }

  get isSplash() {
    return this._splash;
  }

  set isSplash(v) {
    if (this._splash === !!v) return;
    this._splash = !!v;
    this.__notify('is-splash-change', this._splash);
  }
}

// singleton
export const pageState = new PageStateManager();
