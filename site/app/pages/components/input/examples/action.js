import { Component } from 'jinge';

import _tpl from './action.html';

export default class ExampleInputAction extends Component {
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
    this.initial = 'Initial value';
    this.password = 'S3cur!ty';
  }
}
