import {
  Component,
  vm
} from 'jinge';

import _tpl from './selection.html';

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

export default class ExampleTableSelection extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.data = data;
    this.selection = data.slice(0, 1);
  }

  onSelectionChange(selection) {
    this.selection = selection;
    console.log(selection.length);
  }
}
