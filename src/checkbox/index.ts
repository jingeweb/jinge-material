import { Component, __, uid, isArray, arrayPushIfNotExist, arrayRemove, isUndefined, Attributes } from 'jinge';

import _tpl from './index.html';

export interface CheckboxAttrs {
  id?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  trueValue?: unknown;
  falseValue?: unknown;
  value?: unknown;
}
export class Checkbox extends Component {
  static template = _tpl;

  _renderLabel: boolean;
  _isArrayMode: boolean;
  checked: boolean;
  rippleActive: boolean;
  id: string;
  name: string;
  disabled: boolean;
  required: boolean;
  _trueValue: unknown;
  _falseValue: unknown;
  _value: unknown;

  constructor(attrs: Attributes<CheckboxAttrs>, name = 'checkbox') {
    if (isArray(attrs.value) && !('trueValue' in attrs)) {
      throw new Error(
        `<md-${name}>: attribute "trueValue" is required when "value" is array(which means array-mode ${name})`,
      );
    }
    super(attrs);
    this._renderLabel = !!this[__].slots?.default;
    this._isArrayMode = isArray(attrs.value);
    this.checked = null;
    this.rippleActive = false;

    this.id = attrs.id || `md-${name}-${uid()}`;
    this.name = attrs.name || '';
    this.disabled = !!attrs.disabled;
    this.required = !!attrs.required;
    this.trueValue = attrs.trueValue;
    this.falseValue = attrs.falseValue;
    this.value = attrs.value;

    this._calcChecked();
  }

  get value() {
    return this._value;
  }

  set value(v) {
    const isArr = isArray(v);
    if (isArr !== this._isArrayMode) {
      throw new Error('<md-checkbox/>: attribute "value" can\'t change array mode.');
    }
    this._value = v;
    this.__updateIfNeed(this._calcChecked);
  }

  get trueValue() {
    return this._trueValue;
  }

  set trueValue(v) {
    this._trueValue = isUndefined(v) ? true : v;
    this.__updateIfNeed(this._calcChecked);
  }

  get falseValue() {
    return this._falseValue;
  }

  set falseValue(v) {
    this._falseValue = isUndefined(v) ? false : v;
    this.__updateIfNeed(this._calcChecked);
  }

  __afterRender() {
    this.__domPassListeners();
  }

  toggleCheck() {
    if (this.disabled) return;
    this._updateChecked(!this.checked);
  }

  _updateChecked(v: boolean) {
    if (this.checked === v) return;
    this.checked = v;
    if (this._isArrayMode) {
      if (this.checked) {
        arrayPushIfNotExist(this._value as unknown[], this.trueValue);
      } else {
        arrayRemove(this._value as unknown[], this.trueValue);
      }
    } else {
      this._value = this.checked ? this.trueValue : this.falseValue;
    }
    this.rippleActive = true;
    this.__notify('change', this._value);
  }

  _calcChecked() {
    const nc = this._isArrayMode
      ? (this.value as unknown[]).indexOf(this.trueValue) >= 0
      : this.value === this.trueValue;
    if (nc === this.checked) return;
    this.checked = nc;
  }
}
