import { Component } from 'jinge';

import _tpl from './alignment.html';
import _sty from './alignment.scss';

export default class ExampleLayoutAlignment extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return _sty;
  }

  constructor(attrs) {
    super(attrs);
    this.vertical = null;
    this.horizontal = null;
  }
}
