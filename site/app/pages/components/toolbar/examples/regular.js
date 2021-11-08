import { Component } from 'jinge';

import _tpl from './regular.html';

export default class ExampleRegularToolbar extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
div ::deep > .md-toolbar + .md-toolbar {
  margin-top: 16px;
}`;
  }
}
