import './index.scss';

import {
  Component, __,
  uid, isArray,
  isUndefined
} from 'jinge';
import {
  obj2class
} from '../_util';

import _tpl from './index.html';

export class Radio extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    if (isArray(attrs.value) && !('trueValue' in attrs)) {
      throw new Error('<md-radio>: attribute "trueValue" is required when "value" is array(which means array-mode checkbox)');
    }
    super(attrs);
    this._renderLabel = this[__].slots && this[__].slots.default;
    this.classes = '';
    this.rippleActive = false;

    this.id = attrs.id || `md-radio-${uid()}`;
    this.name = attrs.name || '';
    this.class = attrs.class || '';
    this.checked = attrs.checked;
    this.disabled = !!attrs.disabled;
    this.required = !!attrs.required;
    this.value = attrs.value;
    // update classes
    this.__update();
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(v) {
    if (this._disabled === v) return;
    this._disabled = v;
    this.__updateIfNeed();
  }

  get required() {
    return this._required;
  }

  set required(v) {
    if (this._required === v) return;
    this._required = v;
    this.__updateIfNeed();
  }

  get checked() {
    return this._checked;
  }

  set checked(v) {
    this._checked = isUndefined(v) ? false : !!v;
    this.__updateIfNeed();
  }

  get class() {
    return this._class;
  }

  set class(v) {
    if (this._class === v) return;
    this._class = v;
    this.__updateIfNeed(this._updateClasses);
  }

  toggleCheck() {
    if (this.disabled || this._checked) return;
    this._checked = true;
    this.rippleActive = true;
    this.__updateIfNeed();
    this.__notify('change', this.value);
  }

  __update() {
    this.classes = obj2class({
      'md-disabled': this.disabled,
      'md-required': this.required,
      'md-checked': this.checked
    }, this.class);
  }
}
