import {
  Component,
  uid
} from 'jinge';
import {
  STEPPERS_PROVIDER
} from './steppers';

import _tpl from './step.html';

export class Step extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.id = attrs.id || `md-stepper-${uid()}`;
    this.label = attrs.label;
    this.description = attrs.description;
    this.error = attrs.error;
    this.done = attrs.done;
    this.editable = attrs.editable !== false;
    this.index = 0;
    this.isActive = false;
    this.isPreviousDone = false;
    this.Steppers = this.__getContext(STEPPERS_PROVIDER);
    this.Steppers._add(this);
  }

  get done() {
    return this._done;
  }

  set done(v) {
    if (this._done === v) return;
    this._done = v;
    this.__notify('update.done', v);
  }

  get error() {
    return this._error;
  }

  set error(v) {
    if (this._error === v) return;
    this._error = v;
    this.__notify('update.error', v);
  }

  __beforeDestroy() {
    this.Steppers._remove(this);
    this.Steppers = null;
  }
}
