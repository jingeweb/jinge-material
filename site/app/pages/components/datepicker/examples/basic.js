import { Component } from 'jinge';

import _tpl from './basic.html';

export default class ExampleDatepickerBasic extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
p {
  display: flex;
  flex-wrap: wrap;
}
div {
  flex: 1;
  min-width: 120px;
  margin: 0 6px;
}`;
  }

  constructor(attrs) {
    super(attrs);
    this.selectedDate = null;
  }

  onChange(v) {
    this.selectedDate = v;
    console.log(v);
  }
}
