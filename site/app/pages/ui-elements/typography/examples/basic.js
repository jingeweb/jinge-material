import { Component } from 'jinge';

import _tpl from './basic.html';

export default class ExampleElevation extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
div > * {
  margin: .5em 0;
  display: block;
}`;
  }
}
