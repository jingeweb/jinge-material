import './index.scss';

import {
  Component
} from 'jinge';

import _tpl from './index.html';

export class Toolbar extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.className = attrs.class;
    this.elevation = Number(attrs.elevation || 4);
  }
}