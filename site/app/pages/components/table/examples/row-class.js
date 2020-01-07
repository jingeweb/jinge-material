import {
  Component,
  vm
} from 'jinge';

import _tpl from './row-class.html';

const data = vm([{
  name: 'jinge',
  version: 1,
  author: 'YuhangGe'
}, {
  name: 'vue',
  version: 3,
  author: 'vuejs'
}, {
  name: 'react',
  version: 16,
  author: 'facebook'
}, {
  name: 'angular',
  version: 7,
  author: 'google'
}]);

export default class ExampleTableBasic extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
div /deep/ tr.highlight {
  color: var(--md-on-primary);
  background: var(--demo-table-row-class-highlight); 
}`;
  }

  constructor(attrs) {
    super(attrs);

    this.data = data;
  }

  getRowClass(row) {
    return row.name === 'jinge' ? 'highlight' : null;
  }
}
