import './index.scss';

import { Attributes, Component } from 'jinge';
import _tpl from './index.html';

export class Divider extends Component {
  static template = _tpl;

  tag: 'hr' | 'li';

  constructor(attrs: Attributes) {
    super(attrs);
    this.tag = 'hr';
  }

  __afterRender() {
    const el = this.__firstDOM;
    this.tag = el.parentElement.classList.contains('md-list') ? 'li' : 'hr';
  }
}
