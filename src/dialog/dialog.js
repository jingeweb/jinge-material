import './dialog.scss';

import {
  Component,
  NOTIFY
} from 'jinge';

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
    this.closeWhenOutsideClick = attrs.closeWhenOutsideClick !== false;
  }

  onKeydown(evt) {
    if (evt.keyCode === 27 && this.closeOnEsc) {
      this.close('esc');
    }
  }

  close(action) {
    this[NOTIFY]('update.active', false, action);
  }

  get active() {
    return this._active;
  }

  set active(v) {
    if (this._active === v) return;
    this._active = v;
    this[NOTIFY](v ? 'open' : 'close');
  }

  onClick() {
    if (this.closeWhenOutsideClick) {
      this.close('overlay');
    }
    this[NOTIFY]('click-overlay');
  }
}
