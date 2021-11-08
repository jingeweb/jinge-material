import { Component } from 'jinge';

import _tpl from './subheader.html';

export default class ExampleSubheader extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
.viewport {
  width: 320px;
  margin-right: 6px;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  overflow: auto;
  border: 1px solid rgba(0, 0, 0, 0.12);
}`;
  }
}
