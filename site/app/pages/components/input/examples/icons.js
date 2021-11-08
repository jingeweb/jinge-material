import { Component } from 'jinge';

import _tpl from './icons.html';

export default class ExampleInputIcons extends Component {
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
    this.date = null;
    this.voice = null;
    this.description = null;
    this.money = null;
  }
}
