import {
  Component
} from 'jinge';

import _sty from './code-example.scss';
import _tpl from './code-example.html';

export class CodeExample extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return _sty;
  }

  __tt() {
    window.__dd = true;
    this.tab = 'js';
  }

  constructor(attrs) {
    super(attrs);
    this._title = attrs.title;
    this._example = attrs.example;
    this._label = attrs.label || 'jinge';
    this.tab = 'demo';
  }
}
