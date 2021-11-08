import { Component } from 'jinge';

import _tpl from './link-buttons.html';

export default class ExapmleLinkButtons extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `small {
  display: block;
}`;
  }

  constructor(attrs) {
    super(attrs);
    this.pageUrl = window.location.href;
  }
}
