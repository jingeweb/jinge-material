import './index.scss';

import { Component, watch, isUndefined, Attributes } from 'jinge';

import _tpl from './index.html';

export const FIELD_PROVIDER = Symbol('field_provider');
const CLASS_PROPS = [
  'inline',
  'clearable',
  'highlight',
  'focused',
  'disabled',
  'required',
  'hasValue',
  'hasPlaceholder',
  'hasPassword',
  'hasFile',
  'hasSelect',
  'hasTextarea',
  'autogrow',
];

export interface FieldAttrs {
  inline: boolean;
  clearable: boolean;
  class?: string;
  style?: string;
  counter?: boolean;
  togglePassword?: boolean;
}
export class Field extends Component {
  static template = _tpl;

  inline: boolean;
  clearable: boolean;
  className?: string;
  style?: string;
  showCounter: boolean;
  hasTogglePassword: boolean;
  _value: unknown;
  showPassword: boolean;
  maxlength: number;
  counter: number;
  valueLength: number;
  togglePassword: boolean;
  highlight: boolean;
  hasValue: boolean;
  fieldClass: string;
  required: boolean;
  hasPlaceholder: boolean;
  disabled: boolean;
  clear: boolean;
  focused: boolean;
  hasFile: boolean;
  autogrow: boolean;
  hasTextarea: boolean;
  hasPassword: boolean;

  constructor(attrs: Attributes<FieldAttrs>) {
    super(attrs);
    this.inline = attrs.inline;
    this.clearable = attrs.clearable;
    this.className = attrs.class;
    this.style = attrs.style;
    this.showCounter = attrs.counter !== false;
    this.hasTogglePassword = attrs.togglePassword !== false;

    this._value = null;
    this.showPassword = false;
    this.maxlength = null;

    this.counter = 0;
    this.valueLength = 0;
    this.togglePassword = false;

    CLASS_PROPS.forEach((prop) => {
      if (!(prop in this)) {
        (this as unknown as Record<string, boolean>)[prop] = false;
      }
    });

    this.fieldClass = null;
    watch(this, '*', (props) => {
      if (props.length !== 1 || CLASS_PROPS.indexOf(props[0] as string) < 0) {
        return;
      }
      this.__updateIfNeed(this._updateFieldClass);
    });

    // pass parent to children
    this.__setContext(FIELD_PROVIDER, this);
  }

  _updateFieldClass() {
    this.fieldClass = CLASS_PROPS.filter((k) => this[k as keyof this] as unknown as boolean)
      .map((k) => {
        return `md-${k.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}`;
      })
      .join(' ')
      .trim();
    // console.log('update fc', JSON.stringify(this.fieldClass));
  }

  get value() {
    return this._value;
  }

  set value(v) {
    if (this._value === v) return;
    this._value = v;
    const stringValue = isUndefined(v) || v === null ? '' : v.toString();
    const hasValue = stringValue && stringValue.length > 0;
    if (this.hasValue !== hasValue) {
      this.hasValue = hasValue;
    }
    const valueLength = stringValue ? stringValue.length : 0;
    if (this.valueLength !== valueLength) {
      this.valueLength = valueLength;
    }
  }

  onBlur() {
    this.highlight = false;
  }

  _togglePassword() {
    this.togglePassword = !this.togglePassword;
    this.__notify('password-toggled', this.togglePassword);
  }

  clearInput() {
    this.__notify('clear');
  }
}
