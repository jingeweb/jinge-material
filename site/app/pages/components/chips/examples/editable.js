import {
  Component,
  VM
} from 'jinge';

import _tpl from './editable.html';

export default class ExampleClipsEditable extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.fruits = VM(['Orange', 'Apple']);
  }

  log(...args) {
    console.log(...args);
  }
}
