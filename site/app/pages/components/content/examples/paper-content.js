import { Component } from 'jinge';

import _tpl from './paper-content.html';

export default class ExamplePaperContent extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
div ::deep > .md-content {
  width: 200px;
  height: 200px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}`;
  }
}
