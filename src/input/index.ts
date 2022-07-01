import { Attributes, uid } from 'jinge';
import { BaseField, BaseFieldAttrs } from '../field/base';

import _tpl from './index.html';

export interface InputAttrs {
  id?: string;
  type?: string;
  min?: string | number;
  max?: string | number;
  step?: string | number;
}
//! @jinge-component-parse 继承的 BaseField 无法被编译器识别，强制标记需要 parse。
export class Input extends BaseField {
  static template = _tpl;

  id: string;
  _type: string;
  min: string | number;
  max: string | number;
  step: string | number;
  _pwdTHandler: () => void;

  constructor(attrs: Attributes<InputAttrs & BaseFieldAttrs>) {
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

  onPwdToggle(pwdToggled: boolean) {
    const el = this.__firstDOM as HTMLInputElement;
    el.type = pwdToggled ? 'text' : 'password';
  }

  onInput(evt: InputEvent) {
    const v = (evt.target as HTMLInputElement).value;
    if (this.value === v) return;
    this.value = v;
    this.__notify('change', v);
  }

  focus() {
    (this.__firstDOM as HTMLElement).focus();
  }

  select() {
    (this.__firstDOM as HTMLInputElement).select();
  }

  blur() {
    (this.__firstDOM as HTMLInputElement).blur();
  }
}
