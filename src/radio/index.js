import './index.scss';

import {
  Component,
  NOTIFY,
  UPDATE_IF_NEED,
  UPDATE,
  ARG_COMPONENTS
} from 'jinge';

import {
  STR_DEFAULT,
  uid,
  isArray,
  obj2class,
  isUndefined
} from 'jinge/util';

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
    this._renderLabel = this[ARG_COMPONENTS] && this[ARG_COMPONENTS][STR_DEFAULT];
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
    this[UPDATE]();
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

  get checked() {
    return this._checked;
  }

  set checked(v) {
    this._checked = isUndefined(v) ? false : !!v;
    this[UPDATE_IF_NEED]();
  }

  get class() {
    return this._class;
  }

  set class(v) {
    if (this._class === v) return;
    this._class = v;
    this[UPDATE_IF_NEED](this._updateClasses);
  }

  toggleCheck() {
    if (this.disabled || this._checked) return;
    this._checked = true;
    this.rippleActive = true;
    this[UPDATE_IF_NEED]();
    this[NOTIFY]('change', this.value);
  }

  [UPDATE]() {
    this.classes = obj2class({
      'md-disabled': this.disabled,
      'md-required': this.required,
      'md-checked': this.checked
    }, this.class);
  }
}
