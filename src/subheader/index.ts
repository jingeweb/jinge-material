import './index.scss';

import { Attributes, Component } from 'jinge';
import _tpl from './index.html';

export class Subheader extends Component {
  static template = _tpl;

  tag: 'li' | 'div';

  constructor(attrs: Attributes) {
    super(attrs);
  }

  __afterRender() {
    const el = this.__firstDOM;
    this.tag = el.parentElement.classList.contains('md-list') ? 'li' : 'div';
  }
}
