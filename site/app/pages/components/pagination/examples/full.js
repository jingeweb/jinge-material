import {
  Component,
  VM
} from 'jinge';

import _tpl from './full.html';

export default class ExamplePaginationFull extends Component {
  static get template() {
    return _tpl;
  }

  onPaginationChanged(currentPage, pageSize) {
    console.log('pagi:', currentPage, pageSize);
  }

  constructor(attrs) {
    super(attrs);
    this.sizeOptions = VM([10, 50, 100, 200]);
    this.totalSize = (Math.random() * 1000 | 0) + 1000;
  }
}
