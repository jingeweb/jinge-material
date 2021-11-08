import { Component } from 'jinge';

import _tpl from './columns.html';
import _sty from './columns.scss';

export default class ExampleLayoutColumns extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return _sty;
  }
}
