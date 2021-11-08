import { Component } from 'jinge';

import _tpl from './custom.html';

export default class ExampleDialogCustomMarkup extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
div ::deep > .md-dialog {
  max-height: 768px;
}`;
  }

  constructor(attrs) {
    super(attrs);
    this.showDialog = false;
  }
}
