import {
  Component, VM
} from 'jinge';

import _tpl from './immediately.html';

export default class ExampleDatepickerImmediately extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.selectedDate = VM(new Date('1990-04-02'));
  }
}
