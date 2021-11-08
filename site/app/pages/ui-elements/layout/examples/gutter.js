import { Component } from 'jinge';

import _tpl from './gutter.html';
import _sty from './gutter.scss';

export default class ExampleLayoutGutter extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return _sty;
  }
}
