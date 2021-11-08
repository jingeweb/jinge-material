import { Component } from 'jinge';
import _tpl from './index.html';

import SingleSwitch from './examples/single-switch';
import sourceSingleSwitch from './examples/single-switch.js?example';
import ArraySwitch from './examples/array-switch';
import sourceArraySwitch from './examples/array-switch.js?example';

export class PageSwitch extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this._examples = {
      singleSwitch: {
        component: SingleSwitch,
        source: sourceSingleSwitch,
      },
      arraySwitch: {
        component: ArraySwitch,
        source: sourceArraySwitch,
      },
    };
  }
}
