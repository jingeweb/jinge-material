import { Component } from 'jinge';

import _tpl from './single.html';

export default class ExampleClipsSingle extends Component {
  static get template() {
    return _tpl;
  }

  log(...args) {
    console.log(...args);
  }
}
