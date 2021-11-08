import { Component } from 'jinge';

import _tpl from './groups.html';

export default class ExampleSelectGroups extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.food1 = null;
    this.food2 = 'carrots';
  }
}
