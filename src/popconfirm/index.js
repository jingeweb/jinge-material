import {
  Component,
  NOTIFY
} from 'jinge';
import {
  getAndWatchLocale
} from '../_config';

import _tpl from './index.html';

export class Popconfirm extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.title = attrs.title || '';
    this.className = attrs.class;
    this.placement = attrs.placement || 'top-end';
    this.active = attrs.active;
    this.trigger = attrs.trigger;
    this.delay = attrs.delay;
    this.offset = attrs.offset || 16;
    this.closeOnOutsideClick = attrs.closeOnOutsideClick !== false;
    this.transition = attrs.transition;
    this._popperOptions = attrs._popperOptions;
    this.confirmText = attrs.confirmText;
    this.cancelText = attrs.cancelText;
    this.confirmSpinner = attrs.confirmSpinner;
    this.hideWhenConfirmClick = attrs.hideWhenConfirmClick !== false;

    this._localeChangeHandler = this._onLocaleChange.bind(this);
    this.locale = getAndWatchLocale(this._localeChangeHandler);
  }

  _onLocaleChange(locale) {
    this.locale = locale;
  }

  onUpdateActive(isActive) {
    this[NOTIFY]('update.active', isActive);
  }

  onConfirm() {
    this[NOTIFY]('confirm');
    if (this.hideWhenConfirmClick) {
      this.active = false;
      this[NOTIFY]('update.active', false, 'confirm');
    }
  }

  onCancel() {
    this.active = false;
    this[NOTIFY]('cancel');
    this[NOTIFY]('update.active', false, 'cancel');
  }
}
