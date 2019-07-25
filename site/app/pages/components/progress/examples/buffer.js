import {
  Component
} from 'jinge';

import _tpl from './buffer.html';

export default class ExampleBufferProgress extends Component {
  static get style() {
    return 'div /deep/ > .md-progress-bar { margin: 24px; }';
  }

  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.amount = Math.random() * 100 | 0;
    this.buffer = Math.random() * 100 | 0;
  }
}
