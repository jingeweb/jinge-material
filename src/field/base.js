import { Component, isUndefined } from 'jinge';
import { FIELD_PROVIDER } from './index';

export class BaseField extends Component {
  constructor(attrs, componentTag) {
    super(attrs);

    this.Field = this.__getContext(FIELD_PROVIDER);
    if (!this.Field) throw new Error(`<${componentTag}> must be put under <md-field>`);

    this._clearHandler = this.clearField.bind(this);
    this.Field.__on('clear', this._clearHandler);

    this.value = attrs.value;
    this.placeholder = attrs.placeholder;
    this.name = attrs.name;
    this.maxlength = attrs.maxlength;
    this.readonly = attrs.readonly;
    this.required = attrs.required;
    this.disabled = attrs.disabled;
    this.counter = attrs.counter;
  }

  __afterRender() {
    this._setLabelFor(this.__firstDOM);
  }

  __beforeDestroy() {
    this.Field.__off('clear', this._clearHandler);
    this.Field = null;
  }

  get value() {
    return this._value;
  }

  set value(v) {
    if (isUndefined(v)) {
      v = null;
    }
    if (isUndefined(this._value)) {
      this._value = null;
    }
    if (this._value === v) {
      return;
    }
    this._value = v;
    this.Field.value = v;
  }

  get placeholder() {
    return this._placeholder;
  }

  set placeholder(placeholder) {
    if (this._placeholder === placeholder) return;
    this._placeholder = placeholder;
    this.Field.hasPlaceholder = !!placeholder;
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(v) {
    if (this._disabled === v) return;
    this._disabled = v;
    this.Field.disabled = v;
  }

  get required() {
    return this._required;
  }

  set required(v) {
    if (this._required === v) return;
    this._required = v;
    this.Field.required = v;
  }

  get maxlength() {
    return this._maxlength;
  }

  set maxlength(v) {
    if (this._maxlength === v) return;
    this._maxlength = v;
    this.Field.maxlength = parseInt(v, 10);
  }

  get counter() {
    return this._counter;
  }

  set counter(v) {
    if (this._counter === v) return;
    this._counter = v;
    this.Field.counter = parseInt(this.counter, 10);
  }

  clear() {
    this.Field.clear = true;
  }

  clearField() {
    this.__firstDOM.value = '';
    this._doClear();
  }

  _doClear() {
    if (this.value !== null) {
      this.value = null;
      this.__notify('change', null);
    }
  }

  onFocus() {
    this.Field && (this.Field.focused = true);
  }

  onBlur() {
    this.Field && (this.Field.focused = false);
  }

  _setLabelFor(el) {
    el = el.parentNode;
    if (!el) return;
    const label = el.querySelector('label');
    if (!label) return;
    const forAttribute = label.getAttribute('for');

    if (!forAttribute || forAttribute.indexOf('md-') >= 0) {
      label.setAttribute('for', this.id);
    }
  }
}
