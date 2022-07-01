import './dialog.scss';

import { Attributes, Component } from 'jinge';

import _tpl from './dialog.html';

export interface DialogAttrs {
  __portalDisabled?: boolean;
  active?: boolean;
  backdrop?: boolean;
  backdropClass?: string;
  closeOnEsc?: boolean;
  fullscreen?: boolean;
  closeOnOutsideClick?: boolean;
}

export class Dialog extends Component {
  static template = _tpl;

  __portalDisabled: boolean;
  _active: boolean;
  backdrop: boolean;
  backdropClass: string;
  closeOnEsc: boolean;
  fullscreen: boolean;
  closeOnOutsideClick: boolean;

  constructor(attrs: Attributes<DialogAttrs>) {
    super(attrs);
    this.__portalDisabled = attrs.__portalDisabled;
    this.active = attrs.active;
    this.backdrop = attrs.backdrop !== false;
    this.backdropClass = attrs.backdropClass || 'md-dialog-overlay';
    this.closeOnEsc = attrs.closeOnEsc !== false;
    this.fullscreen = attrs.fullscreen !== false;
    this.closeOnOutsideClick = attrs.closeOnOutsideClick !== false;
  }

  onKeydown(evt: KeyboardEvent) {
    if (evt.key === 'ESC' && this.closeOnEsc) {
      this.close('esc');
    }
  }

  close(action: string) {
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
