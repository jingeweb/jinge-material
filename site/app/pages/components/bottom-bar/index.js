import { Component } from 'jinge';
import _tpl from './index.html';
import apis from './api';

import Fixed from './examples/fixed';
import sourceFixed from './examples/fixed?example';
import Shift from './examples/shift';
import sourceShift from './examples/shift?example';

export class PageBottomBar extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.__i18nWatch(() => {
      this.api = apis();
    }, true);
    this._examples = {
      fixed: {
        component: Fixed,
        source: sourceFixed,
      },
      shift: {
        component: Shift,
        source: sourceShift,
      },
    };
  }
}
