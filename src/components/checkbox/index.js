import './index.scss';

import {
  Component
} from 'jinge';

import _tpl from './index.html';

import {
  ARG_COMPONENTS,
  UPDATE_IF_NEED,
  UPDATE
} from 'jinge/core/component';
import {
  STR_DEFAULT,
  simpleUUID,
  isArray,
  arrayPushIfNotExist,
  arrayRemove,
  obj2class
} from 'jinge/util';

export class Checkbox extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.id = attrs.id || `md-checkbox-${simpleUUID()}`;
    this.disabled = !!attrs.disabled;
    this.name = attrs.name;
    this.required = !!attrs.required;
    this.trueValue = ('trueValue' in attrs) ? attrs.trueValue : true;
    this.falseValue = ('falseValue' in attrs) ? attrs.falseValue : false;
    if (this.trueValue === this.falseValue) {
      throw new Error('<md-checkbox>: values of "trueValue" and "falseValue" must not be same.');
    }
    if (isArray(this.trueValue) || isArray(this.falseValue)) {
      throw new Error('<md-checkbox>: value of "trueValue","falseValue" must not be Array');
    }
    this.value = attrs.value === this.trueValue ? this.trueValue : this.falseValue;
    this.checked = isArray(this.value) ? this.value.indexOf(this.trueValue) >= 0 : this.value === this.trueValue;
    this.rippleActive = false;
    this._renderLabel = this[ARG_COMPONENTS] && this[ARG_COMPONENTS][STR_DEFAULT];
    this.classes = '';
    this._updateClasses();
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(v) {
    if (this._disabled === v) return;
    this._disabled = v;
    this[UPDATE_IF_NEED]();
  }
  get required() {
    return this._required;
  }
  set required(v) {
    if (this._required === v) return;
    this._required = v;
    this[UPDATE_IF_NEED]();
  }
  onChange($event) {
    this._updateChecked($event.target.checked);
  }
  toggleCheck() {
    this._updateChecked(!this.checked);
  }
  _updateChecked(v) {
    if (this.checked === v) return;
    this.checked = v;
    this._updateClasses();
    if (isArray(this.value)) {
      if (this.checked) {
        arrayPushIfNotExist(this.value, this.trueValue);
      } else {
        arrayRemove(this.value, this.trueValue);
      }
    } else {
      this.value = this.checked ? this.trueValue : this.falseValue;
    }
    this.notify('change', this.value);
  }
  _updateClasses() {
    this.classes = obj2class({
      'md-disabled': this.disabled,
      'md-required': this.required,
      'md-checked': this.checked
    });
  }
  [UPDATE]() {
    this._updateClasses();
  }
}