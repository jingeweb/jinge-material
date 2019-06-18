import {
  Component,
  BEFORE_DESTROY
} from 'jinge';

import _tpl from './progress.html';

export default class ExampleProgressSpinner extends Component {
  static get style() {
    return `p {
  display: inline-flex;
  align-items: center;
}
p /deep/ > .md-spinner + .md-spinner {
  margin: 6px;
}`;
  }
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.v = 10;
    this._int = setInterval(() => {
      if (this.v >= 100) {
        this.v = 10;
      } else {
        this.v += 10;
      }
    }, 2000);
  }
  [BEFORE_DESTROY]() {
    clearInterval(this._int);
  }
}