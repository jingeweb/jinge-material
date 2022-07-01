import { Component, attrs, setImmediate, isFunction, isString, Attributes } from 'jinge';
import { LocaleDict } from '../_locales/common';
import { getAndWatchLocale } from '../_config';

import _tpl from './dialog-alert.html';

function showDialogAlert(opts: string | DialogAlertAttrs, closeCallback: () => boolean) {
  if (isString(opts)) {
    opts = {
      title: opts,
    };
  }
  const el = DialogAlert.create(
    attrs({
      __portalDisabled: true,
      active: false,
      ...opts,
    }),
  );
  el.__on('update.active', (active) => {
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

export interface DialogAlertAttrs {
  __portalDisabled?: boolean;
  active?: boolean;
  title: string;
  content?: string;
  confirmText?: string;
}
export class DialogAlert extends Component {
  static template = _tpl;
  static show = showDialogAlert;

  __portalDisabled: boolean;
  active: boolean;
  title: string;
  content: string;
  confirmText: string;
  _localeChangeHandler: () => void;
  locale: LocaleDict;

  constructor(attrs: Attributes<DialogAlertAttrs>) {
    super(attrs);
    this.__portalDisabled = attrs.__portalDisabled;
    this.active = attrs.active;
    this.title = attrs.title;
    this.content = attrs.content;
    this.confirmText = attrs.confirmText;
    this._localeChangeHandler = this._onLocaleChange.bind(this);
    this.locale = getAndWatchLocale(this._localeChangeHandler);
  }

  _onLocaleChange(locale: LocaleDict) {
    this.locale = locale;
  }

  onClick() {
    this.__notify('update.active', false, 'confirm');
  }

  passActive(active: boolean, action: string) {
    this.__notify('update.active', active, action);
  }
}
