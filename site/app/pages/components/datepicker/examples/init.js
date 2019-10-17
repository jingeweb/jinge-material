import {
  Component
} from 'jinge';

import _tpl from './init.html';

export default class ExampleDatepickerInit extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.selectedDate = new Date('1990-04-02');
  }
}
