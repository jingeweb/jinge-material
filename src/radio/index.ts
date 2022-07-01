import './index.scss';

import { Component, __, uid, isArray, Attributes } from 'jinge';

import _tpl from './index.html';

export interface RadioAttrs {
  id?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  value?: unknown;
}
export class Radio extends Component {
  static template = _tpl;

  id?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  value?: unknown;
  _renderLabel: boolean;
  rippleActive: boolean;

  constructor(attrs: Attributes<RadioAttrs>) {
    if (isArray(attrs.value) && !('trueValue' in attrs)) {
      throw new Error(
        '<md-radio>: attribute "trueValue" is required when "value" is array(which means array-mode checkbox)',
      );
    }
    super(attrs);
    this._renderLabel = !!this[__].slots?.default;
    this.rippleActive = false;

    this.id = attrs.id || `md-radio-${uid()}`;
    this.name = attrs.name || '';

    this.checked = attrs.checked;
    this.disabled = !!attrs.disabled;
    this.required = !!attrs.required;
    this.value = attrs.value;
    // update classes
    this.__update();
  }

  toggleCheck() {
    if (this.disabled || this.checked) return;
    this.checked = true;
    this.rippleActive = true;
    this.__notify('change', this.value);
  }
}
