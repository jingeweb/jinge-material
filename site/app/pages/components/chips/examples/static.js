import {
  Component, VM
} from 'jinge';

import _tpl from './static.html';

export default class ExampleClipsStatic extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.cities = VM([
      'Chengdu', 'Shanghai', 'New York', 'Tokyo'
    ]);
  }
}
