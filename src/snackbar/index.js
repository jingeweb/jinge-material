import './index.scss';

import {
  Component,
  NOTIFY,
  wrapAttrs,
  isString,
  RENDER_TO_DOM
} from 'jinge';
import {
  SnackbarQueueManager
} from './queue';

import _tpl from './index.html';

const queueManager = new SnackbarQueueManager();

export class Snackbar extends Component {
  static get template() {
    return _tpl;
  }

  static show(options) {
    if (isString(options)) {
      options = {
        message: options
      };
    }
    const el = new Snackbar(wrapAttrs(Object.assign({
      __portalDisabled: true,
      active: false
    }, options || {})));
    el[RENDER_TO_DOM](document.body, false);
    setImmediate(() => {
      el.active = true;
    });
  }

  constructor(attrs) {
    super(attrs);
    this.position = attrs.position || 'center';
    this.active = attrs.active;
    this.duration = Number(attrs.duration || 4000);
    this.message = attrs.message || '';
    this.isShown = false;
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
    this[NOTIFY]('update.active', true);
    this[NOTIFY]('opened');
  }

  _onClose() {
    this.isShown = false;
    this[NOTIFY]('update.active', false);
    this[NOTIFY]('closed');
  }
}
