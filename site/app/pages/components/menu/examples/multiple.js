import { Component } from 'jinge';

import _tpl from './multiple.html';
import _sty from './multiple.scss';

export default class ExampleMenuMultiple extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return _sty;
  }

  constructor(attrs) {
    super(attrs);
    this.toggleCard = false;
  }

  toggle() {
    this.toggleCard = !this.toggleCard;
  }
}
