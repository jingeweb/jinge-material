import { Component, vm, $$, isNumber } from 'jinge';

import _tpl from './steppers.html';

export const STEPPERS_PROVIDER = Symbol('steppers');

export class Steppers extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.items = vm([]);
    this._Steppers = vm({
      vertical: false,
      linear: false,
      _get: this._get.bind(this),
      _add: this._add.bind(this),
      _remove: this._remove.bind(this),
      _active: this._active.bind(this),
    });
    this.contentStyle = null;
    this.contentTransform = null;

    this.vertical = attrs.vertical;
    this.dynamicHeight = attrs.dynamicHeight;
    this.alternative = attrs.alternative;
    this.activeStep = attrs.activeStep || 0;
    this.linear = attrs.linear;

    this.__setContext(STEPPERS_PROVIDER, this._Steppers);
  }

  get vertical() {
    return this._vertical;
  }

  set vertical(v) {
    if (this._vertical === v) return;
    this._vertical = v;
    this._Steppers.vertical = v;
  }

  get linear() {
    return this._linear;
  }

  set linear(v) {
    if (this._linear === v) return;
    this._linear = v;
    this._Steppers.linear = v;
  }

  get activeStep() {
    return this._activeStep;
  }

  set activeStep(v) {
    if (this._activeStep === v) return;
    this._activeStep = v;
    this.__updateIfNeed(this._update);
  }

  _update(notify = true) {
    if (!isNumber(this._activeStep)) {
      this._activeStep = this.items.findIndex((it) => it.id === this._activeStep);
    }
    this._setActive(this._activeStep, notify);
  }

  __afterRender() {
    this._update(false);
    if (this.items.length > 0) {
      this.items[$$].__notify('length', true);
    }
  }

  _add(step) {
    step.index = this.items.length;
    this.items.push(step);
  }

  _remove(step) {
    const idx = this.items.indexOf(step);
    this.items.splice(idx, 1);
    for (let i = idx; i < this.items.length; i++) {
      this.items[i].index = i;
    }
  }

  _get(index) {
    return this.items[index];
  }

  _active(index) {
    if (this._activeStep === index) {
      return;
    }
    this._activeStep = index;
    this._setActive(index);
  }

  _setActive(index, notify = true) {
    if (index < 0 || index >= this.items.length) {
      return;
    }
    for (let i = 0; i < this.items.length; i++) {
      const step = this.items[i];
      step.isActive = i === index;
      if (!step.isPreviousDone) {
        step.isPreviousDone = i <= index;
      }
      if (i < index && !step.done) {
        step.done = true;
      }
    }
    if (!this.vertical) {
      this.contentTransform = `transform: translate3D(${-this._activeStep * 100}%, 0, 0)`;
      const stepperElement = this.__firstDOM.querySelector(`.md-stepper:nth-child(${this._activeStep + 1})`);
      this.contentStyle = `height: ${stepperElement.offsetHeight}px`;
    }
    notify && this.__notify('changed', index, this.items[index]);
  }
}
