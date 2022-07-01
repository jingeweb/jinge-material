import { setImmediate } from 'jinge';
import { Snackbar } from './index';

export class SnackbarQueueManager {
  _queue: Snackbar[];
  _snack: Snackbar;
  _ntm: number;
  _nextHandler: () => void;

  constructor() {
    this._queue = [];
    this._snack = null;
    this._ntm = null;
    this._nextHandler = this._next.bind(this);
  }

  _schedule() {
    if (this._queue.length === 0 || this._snack) {
      return;
    }
    this._snack = this._queue.shift();
    this._snack._onOpen();
    if (this._snack.duration > 0 && this._snack.duration < Infinity) {
      this._ntm = window.setTimeout(this._nextHandler, this._snack.duration);
    }
  }

  _next() {
    this._snack._onClose();
    this._ntm = null;
    this._snack = null;
    setImmediate(() => this._schedule());
  }

  add(snack: Snackbar) {
    if (this._snack === snack || this._queue.indexOf(snack) >= 0) {
      return;
    }
    this._queue.push(snack);
    setImmediate(() => this._schedule());
  }

  remove(snack: Snackbar) {
    if (this._snack === snack) {
      if (this._ntm) clearTimeout(this._ntm);
      this._next();
    } else {
      const idx = this._queue.indexOf(snack);
      if (idx >= 0) this._queue.splice(idx, 1);
    }
  }
}
