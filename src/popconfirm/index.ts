import './index.scss';

import { Attributes, Component } from 'jinge';
import { OptionsGeneric, Placement } from '@popperjs/core';
import { getAndWatchLocale } from '../_config';

import _tpl from './index.html';

export interface PopconfirmAttrs {
  title?: string;
  errorTip?: string;
  placement?: Placement;
  active?: boolean;
  trigger: 'click' | 'hover';
  delay?: number;
  offset?: number;
  closeOnOutsideClick?: boolean;
  transition?: string;
  _popperOptions: OptionsGeneric<unknown>;
  confirmText?: string;
  cancelText?: string;
  confirmSpinner?: boolean;
  hideWhenConfirmClick?: boolean;
}

export class Popconfirm extends Component {
  static template = _tpl;

  title?: string;
  error?: string;
  placement?: Placement;
  active?: boolean;
  trigger: 'click' | 'hover';
  delay?: number;
  offset?: number;
  closeOnOutsideClick?: boolean;
  transition?: string;
  _popperOptions: OptionsGeneric<unknown>;
  confirmText?: string;
  cancelText?: string;
  confirmSpinner?: boolean;
  hideWhenConfirmClick?: boolean;
  _localeChangeHandler: () => void;
  locale: string;

  constructor(attrs: Attributes<PopconfirmAttrs>) {
    super(attrs);
    this.title = attrs.title || '';
    this.error = attrs.errorTip;
    this.placement = attrs.placement || 'top-end';
    this.active = attrs.active;
    this.trigger = attrs.trigger || 'click';
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

  _onLocaleChange(locale: string) {
    this.locale = locale;
  }

  onUpdateActive(isActive: boolean) {
    this.active = isActive;
    this.__notify('update.active', isActive);
  }

  onConfirm() {
    this.__notify('confirm');
    if (this.hideWhenConfirmClick) {
      this.active = false;
      this.__notify('update.active', false, 'confirm');
    }
  }

  onCancel() {
    this.active = false;
    this.__notify('cancel');
    this.__notify('update.active', false, 'cancel');
  }
}
