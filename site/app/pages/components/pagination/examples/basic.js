import { Component } from 'jinge';

import _tpl from './basic.html';

export default class ExamplePaginationBasic extends Component {
  static get template() {
    return _tpl;
  }

  onPaginationChanged(currentPage, pageSize) {
    console.log('pagi:', currentPage, pageSize);
  }
}
