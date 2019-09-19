import './index.scss';

import {
  Component,
  Symbol,
  NOTIFY,
  vmWatch,
  SET_CONTEXT,
  UPDATE_IF_NEED
} from 'jinge';

import _tpl from './index.html';

export const FIELD_PROVIDER = Symbol('FIELD_PROVIDER');

export class Field extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
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

    this.highlight = false;
    this.counter = false;
    this.focused = false;
    this.disabled = false;
    this.required = false;
    this.hasValue = false;
    this.valueLength = 0;
    this.hasPlaceholder = false;
    this.togglePassword = false;
    this.hasPassword = false;
    this.hasFile = false;
    this.hasSelect = false;
    this.hasTextarea = false;
    this.autogrow = false;

    this._fieldClassObj = {
      inline: this.inline,
      clearable: this.clearable,
      highlight: this.highlight,
      focused: this.focused,
      disabled: this.disabled,
      required: this.required,
      hasValue: this.hasValue,
      hasPlaceholder: this.hasPlaceholder,
      hasPassword: this.hasPassword,
      hasFile: this.hasFile,
      hasSelect: this.hasSelect,
      hasTextarea: this.hasTextarea,
      autogrow: this.autogrow
    };
    this.fieldClass = '';
    vmWatch(this, '*', (props) => {
      if (props.length !== 1 || !(props[0] in this._fieldClassObj)) {
        return;
      }
      this[UPDATE_IF_NEED](this._updateFieldClass);
    });

    // pass parent to children
    this[SET_CONTEXT](FIELD_PROVIDER, this);
  }

  _updateFieldClass() {
    // console.log('check upfc');
    let changed = false;
    const obj = this._fieldClassObj;
    for (const prop in obj) {
      if (this[prop] !== obj[prop]) {
        changed = true;
        obj[prop] = this[prop];
      }
    }
    if (!changed) {
      return;
    }
    this.fieldClass = Object.keys(obj).filter(k => obj[k]).map(k => {
      return `md-${k.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}`;
    }).join(' ').trim();
    // console.log('update fc', JSON.stringify(this.fieldClass));
  }

  get value() {
    return this._value;
  }

  set value(v) {
    if (this._value === v) return;
    this._value = v;
    const stringValue = (v || v === 0) && v.toString();
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
    this[NOTIFY]('password-toggled', this.togglePassword);
  }

  clearInput() {
    this[NOTIFY]('clear');
  }
}
