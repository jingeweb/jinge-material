import { Component } from 'jinge';

import _tpl from './text.html';

export default class ExampleInputText extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.initial = 'Initial Value';
    this.type = null;
    this.withLabel = null;
    this.inline = null;
    this.number = null;
    this.textarea = null;
    this.autogrow = null;
    this.disabled = null;
  }
}
