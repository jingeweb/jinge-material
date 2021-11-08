import { Component } from 'jinge';

import _tpl from './disabled.html';

export default class ExampleSelectDisabled extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.movie = null;
    this.food = null;
    this.country = null;
  }
}
