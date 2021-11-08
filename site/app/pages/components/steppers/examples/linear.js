import { Component } from 'jinge';

import _tpl from './linear.html';

export default class ExampleSteppersLinear extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.active = 'first';
    this.first = false;
    this.second = false;
    this.third = false;
    this.error = null;
  }

  setDone(id, index) {
    this[id] = true;
    this.error = null;
    if (index) {
      this.active = index;
    }
  }

  setError() {
    this.error = 'This is an error!';
  }
}
