import { Component } from 'jinge';

import _tpl from './regular.html';

export default class ExampleFileRegular extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.initial = 'jinge-material-is-awesome.jpg';
    this.single = null;
    this.placeholder = null;
    this.disabled = null;
    this.multiple = null;
  }
}
