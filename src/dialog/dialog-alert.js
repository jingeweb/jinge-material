import {
  Component,
  attrs,
  setImmediate,
  isFunction,
  isString
} from 'jinge';
import {
  getAndWatchLocale
} from '../_config';

import _tpl from './dialog-alert.html';

export class DialogAlert extends Component {
  static get template() {
    return _tpl;
  }

  static show(opts, closeCallback) {
    if (isString(opts)) {
      opts = {
        title: opts
      };
    }
    const el = DialogAlert.create(attrs(Object.assign({
      __portalDisabled: true,
      active: false
    }, opts)));
    el.__on('update.active', active => {
      if (active) return;
      if (isFunction(closeCallback) && closeCallback() === false) {
        return;
      }
      el.__destroy();
    });
    el.__renderToDOM(document.body, false);
    setImmediate(() => {
      el.active = true;
    });
  }

  constructor(attrs) {
    super(attrs);
    this.__portalDisabled = attrs.__portalDisabled;
    this.active = attrs.active;
    this.title = attrs.title;
    this.content = attrs.content;
    this.confirmText = attrs.confirmText;
    this._localeChangeHandler = this._onLocaleChange.bind(this);
    this.locale = getAndWatchLocale(this._localeChangeHandler);
  }

  _onLocaleChange(locale) {
    this.locale = locale;
  }

  onClick() {
    this.__notify('update.active', false, 'confirm');
  }

  passActive(active, action) {
    this.__notify('update.active', active, action);
  }
}
