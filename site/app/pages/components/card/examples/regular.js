import { Component } from 'jinge';

import _tpl from './regular.html';

export default class ExampleRegularCard extends Component {
  static get style() {
    return `
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}`;
  }

  static get template() {
    return _tpl;
  }
}
