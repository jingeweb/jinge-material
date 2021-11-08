import { Component } from 'jinge';

import _tpl from './error.html';

export default class ExampleInputError extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.noError = null;
    this.required = null;
    this.textarea = null;
    this.messageClass = undefined;
    this.hasMessages = false;
  }

  get hasMessages() {
    return this._hm;
  }

  set hasMessages(v) {
    if (this._hm === v) return;
    this._hm = v;
    this.messageClass = v ? 'md-invalid' : undefined;
  }
}
