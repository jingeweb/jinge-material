import { Component, vm } from 'jinge';

import _tpl from './duplicated.html';
import _sty from './duplicated.scss';

export default class ExampleClipsDuplicated extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return _sty;
  }

  constructor(attrs) {
    super(attrs);
    this.chips = vm(['Pop', 'Rock', 'Jazz', 'Metal']);
  }

  log(...args) {
    console.log(...args);
  }
}
