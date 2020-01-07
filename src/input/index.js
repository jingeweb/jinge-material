import {
  uid
} from 'jinge';
import {
  BaseField
} from '../field/base';

import _tpl from './index.html';

export class Input extends BaseField {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs, 'md-input');
    this.id = attrs.id || `md-input-${uid()}`;
    this.type = attrs.type || 'text';
    this.min = attrs.min;
    this.max = attrs.max;
    this.step = attrs.step;

    this._pwdTHandler = this.onPwdToggle.bind(this);
    // don't forget to call parent's _updateFieldClass
    this.Field.__on('password-toggled', this._pwdTHandler);
    this.Field._updateFieldClass();
  }

  __afterRender() {
    this.__domPassListeners(['input', 'change']);
    super.__afterRender();
  }

  __beforeDestroy() {
    this.Field.__off('password-toggled', this._pwdTHandler);
    super.__beforeDestroy();
  }

  get type() {
    return this._type;
  }

  set type(v) {
    if (this._type === v) return;
    this._type = v;
    this.Field.hasPassword = v === 'password';
    this.Field.togglePassword = false;
  }

  _doClear() {
    if (this.value) {
      this.value = '';
      this.__notify('change', this._value);
    }
  }

  onPwdToggle(pwdToggled) {
    const el = this.__firstDOM;
    el.type = pwdToggled ? 'text' : 'password';
  }

  onInput(evt) {
    const v = evt.target.value;
    if (this.value === v) return;
    this.value = v;
    this.__notify('change', v);
  }

  focus() {
    this.__firstDOM.focus();
  }

  select() {
    this.__firstDOM.select();
  }

  blur() {
    this.__firstDOM.blur();
  }
}
