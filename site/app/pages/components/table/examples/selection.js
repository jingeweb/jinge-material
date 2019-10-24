import {
  Component,
  VM
} from 'jinge';

import _tpl from './selection.html';

const data = VM([{
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

export default class ExampleTableSelection extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
div {
  max-height: 400px;
  overflow: auto;
}
div /deep/ tr.highlight {
  background: #e3f2fd; 
}`;
  }

  constructor(attrs) {
    super(attrs);
    this.data = null;
    this.selection = null;
  }

  getRowClass(row, rowIndex) {
    return row.name === 'jinge' ? 'highlight' : null;
  }

  onSelectionChange(selection) {
    this.selection = selection;
    console.log(selection.length);
  }

  test() {
    const dd = new Array(2000).fill(data[0]);
    console.log(dd.length);
    this.data = VM(dd);
    this.selection = this.data;
  }
}
