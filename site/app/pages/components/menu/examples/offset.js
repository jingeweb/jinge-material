import { Component } from 'jinge';

import _tpl from './offset.html';

export default class ExampleMenuOffset extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
.md-menu {
  margin: 24px;
}`;
  }
}
