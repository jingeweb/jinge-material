import './dialog.scss';

import { Component } from 'jinge';

import _tpl from './dialog.html';

export class Dialog extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.__portalDisabled = attrs.__portalDisabled;
    this.active = attrs.active;
    this.backdrop = attrs.backdrop !== false;
    this.backdropClass = attrs.backdropClass || 'md-dialog-overlay';
    this.closeOnEsc = attrs.closeOnEsc !== false;
    this.fullscreen = attrs.fullscreen !== false;
    this.closeOnOutsideClick = attrs.closeOnOutsideClick !== false;
  }

  onKeydown(evt) {
    if (evt.keyCode === 27 && this.closeOnEsc) {
      this.close('esc');
    }
  }

  close(action) {
    this.__notify('update.active', false, action);
  }

  get active() {
    return this._active;
  }

  set active(v) {
    if (this._active === v) return;
    this._active = v;
    this.__notify(v ? 'open' : 'close');
  }

  onClick() {
    if (this.closeOnOutsideClick) {
      this.close('overlay');
    }
    this.__notify('click-overlay');
  }
}
