import './index.scss';

import {
  Component,
  Symbol,
  NOTIFY,
  vmWatch,
  SET_CONTEXT,
  UPDATE_IF_NEED,
  isUndefined
} from 'jinge';

import _tpl from './index.html';

export const FIELD_PROVIDER = Symbol('FIELD_PROVIDER');
const CLASS_PROPS = [
  'inline', 'clearable', 'highlight', 'focused', 'disabled',
  'required', 'hasValue', 'hasPlaceholder', 'hasPassword',
  'hasFile', 'hasSelect', 'hasTextarea', 'autogrow'
];
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

    this.counter = false;
    this.valueLength = 0;
    this.togglePassword = false;

    CLASS_PROPS.forEach(prop => {
      if (!(prop in this)) {
        this[prop] = false;
      }
    });

    this.fieldClass = null;
    vmWatch(this, '*', (props) => {
      if (props.length !== 1 || CLASS_PROPS.indexOf(props[0]) < 0) {
        return;
      }
      this[UPDATE_IF_NEED](this._updateFieldClass);
    });

    // pass parent to children
    this[SET_CONTEXT](FIELD_PROVIDER, this);
  }

  _updateFieldClass() {
    this.fieldClass = CLASS_PROPS.filter(k => this[k]).map(k => {
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
    this[NOTIFY]('password-toggled', this.togglePassword);
  }

  clearInput() {
    this[NOTIFY]('clear');
  }
}
