import { Component } from 'jinge';

import _tpl from './disabled.html';

export default class ExamplePaginationDisabled extends Component {
  static get template() {
    return _tpl;
  }

  onPaginationChanged(currentPage, pageSize) {
    console.log('pagi:', currentPage, pageSize);
  }
}
