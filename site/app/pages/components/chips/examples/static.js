import { Component, vm } from 'jinge';

import _tpl from './static.html';

export default class ExampleClipsStatic extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.cities = vm(['Chengdu', 'Shanghai', 'New York', 'Tokyo']);
  }
}
