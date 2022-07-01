import './index.scss';

import { Component, attrs as wrapAttrs, isString, setImmediate, Attributes } from 'jinge';
import { SnackbarQueueManager } from './queue';

import _tpl from './index.html';

const queueManager = new SnackbarQueueManager();

export interface SnackbarAttrs {
  message: string;
  position?: 'center' | 'bottom' | 'top';
  active?: boolean;
  duration?: number;
  __portalDisabled?: boolean;
}
export class Snackbar extends Component {
  static template = _tpl;

  static show(options: string | SnackbarAttrs) {
    if (isString(options)) {
      options = {
        message: options,
      };
    }
    const el = Snackbar.create(
      wrapAttrs(
        Object.assign(
          {
            __portalDisabled: true,
            active: false,
          },
          options || {},
        ),
      ),
    );
    el.__renderToDOM(document.body, false);
    setImmediate(() => {
      el.active = true;
    });
  }

  position: SnackbarAttrs['position'];
  _active: SnackbarAttrs['active'];
  duration: number;
  message: string;
  isShown: boolean;
  __portalDisabled: boolean;

  constructor(attrs: Attributes<SnackbarAttrs>) {
    super(attrs);
    this.position = attrs.position || 'center';
    this.active = attrs.active;
    this.duration = Number(attrs.duration || 4000);
    this.message = attrs.message || '';
    this.isShown = false;
    this.__portalDisabled = attrs.__portalDisabled;
  }

  get active() {
    return this._active;
  }

  set active(v) {
    if (this._active === v) return;
    this._active = v;
    if (v) {
      queueManager.add(this);
    } else {
      queueManager.remove(this);
    }
  }

  open() {
    if (this.active) return;
    this.active = true;
  }

  close() {
    if (!this.active) return;
    this.active = false;
  }

  _onOpen() {
    this.isShown = true;
    this.__notify('update.active', true);
    this.__notify('opened');
  }

  _onClose() {
    this.isShown = false;
    this.__notify('update.active', false);
    this.__notify('closed');
  }
}
