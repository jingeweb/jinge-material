import {
  uid,
  AFTER_RENDER,
  BEFORE_DESTROY,
  ON,
  OFF
} from 'jinge';
import {
  bindDOMListeners,
  unbindDOMListeners,
  GET_FIRST_DOM
} from 'jinge/core/component';
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
    this.Field[ON]('password-toggled', this._pwdTHandler);
    this.Field._updateFieldClass();
  }

  [AFTER_RENDER]() {
    bindDOMListeners(this, ['input', 'change']);
    super[AFTER_RENDER]();
  }

  [BEFORE_DESTROY]() {
    unbindDOMListeners(this);
    this.Field[OFF]('password-toggled', this._pwdTHandler);
    super[BEFORE_DESTROY]();
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

  onPwdToggle(pwdToggled) {
    const el = this[GET_FIRST_DOM]();
    el.type = pwdToggled ? 'text' : 'password';
  }

  onInput(evt) {
    this.value = evt.target.value;
  }
}
