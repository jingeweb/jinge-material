import { Component } from 'jinge';

import _sty from './about.scss';
import _tpl from './about.html';

export class PageAbout extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return _sty;
  }
}
