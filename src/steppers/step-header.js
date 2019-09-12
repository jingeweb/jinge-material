import {
  Component,
  GET_CONTEXT,
  BEFORE_DESTROY
} from 'jinge';
import {
  STEPPERS_PROVIDER
} from './steppers';

import _tpl from './step-header.html';

export class StepHeader extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.Steppers = this[GET_CONTEXT](STEPPERS_PROVIDER);
    this.step = null;
    this.index = attrs.index;
  }

  get index() {
    return this._index;
  }

  set index(v) {
    if (this._index === v) return;
    this._index = v;
    this.step = this.Steppers._get(v);
  }

  active() {
    this.Steppers._active(this.index);
  }

  [BEFORE_DESTROY]() {
    this.Steppers = null;
  }
}
