import {
  Messenger,
  NOTIFY,
  Symbol
} from 'jinge';

export const TITLE_CHANGED = Symbol('title-changed');
export const IS_SPLASH_CHANGED = Symbol('is-splash-changed');

class PageStateManager extends Messenger {
  constructor() {
    super();
    this._title = '';
    this._splash = location.pathname === '/';
  }

  get title() {
    return this._title;
  }

  set title(v) {
    if (this._title === v) return;
    this._title = v ? (v + ' - Jinge Material') : 'Jinge Material';
    document.title = this._title;
    this[NOTIFY](TITLE_CHANGED, v);
  }

  get isSplash() {
    return this._splash;
  }

  set isSplash(v) {
    if (this._splash === !!v) return;
    this._splash = !!v;
    this[NOTIFY](IS_SPLASH_CHANGED, this._splash);
  }
}

// singleton
export const pageState = new PageStateManager();
