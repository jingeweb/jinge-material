import { Component } from 'jinge';

import _tpl from './colors.html';

export default class ExampleEmptyColors extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
div {
  text-align: center;
}

.md-empty-state {
  display: inline-block;
  vertical-align: middle;

  + .md-empty-state {
    margin-left: 16px;
  }
}`;
  }
}
