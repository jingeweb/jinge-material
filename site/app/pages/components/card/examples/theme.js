import { Component } from 'jinge';

import _tpl from './theme.html';
import _sty from './theme.scss';

export default class ExampleThemeCard extends Component {
  static get style() {
    return _sty;
  }

  static get template() {
    return _tpl;
  }
}
