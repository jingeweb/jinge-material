import { Component } from 'jinge';

import _tpl from './counter.html';

export default class ExampleInputCounter extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.regular = null;
    this.maxLength = null;
    this.disabled = null;
    this.autogrow = null;
    this.textarea = null;
  }
}
