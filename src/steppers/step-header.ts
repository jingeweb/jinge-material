import { Attributes, Component } from 'jinge';
import { Steppers } from './steppers';

import _tpl from './step-header.html';
import { Step } from './step';
import { STEPPERS_PROVIDER } from './common';

export interface StepHeaderAttrs {
  index: number;
}
export class StepHeader extends Component {
  static template = _tpl;

  Steppers: Steppers;
  step: Step;
  _index: number;

  constructor(attrs: Attributes<StepHeaderAttrs>) {
    super(attrs);
    this.Steppers = this.__getContext(STEPPERS_PROVIDER) as Steppers;
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

  __beforeDestroy() {
    this.Steppers = null;
  }
}
