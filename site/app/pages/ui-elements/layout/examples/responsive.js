import { Component } from 'jinge';

import _tpl from './responsive.html';
import _sty from './responsive.scss';

export default class ExampleLayoutResponsive extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return _sty;
  }
}
