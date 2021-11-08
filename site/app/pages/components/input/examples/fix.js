import { Component } from 'jinge';

import _tpl from './fix.html';

export default class ExampleInputFix extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
.md-field:last-child {
  margin-bottom: 40px;
}`;
  }

  constructor(attrs) {
    super(attrs);
    this.initial = 0;
    this.empty = '';
  }
}
