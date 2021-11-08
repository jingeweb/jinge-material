import { Component } from 'jinge';

import _tpl from './double-line.html';

export default class ExampleListDoubleLine extends Component {
  static get style() {
    return `
.md-list {
  width: 320px;
  max-width: 100%;
  display: inline-block;
  margin-right: 4px;
  vertical-align: top;
  border: 1px solid rgba(0, 0, 0, 0.12);
}`;
  }

  static get template() {
    return _tpl;
  }
}
