import { Component } from 'jinge';
import _tpl from './index.html';
import apis from './api';

import SingleCheckbox from './examples/single-checkbox';
import sourceSingleCheckbox from './examples/single-checkbox.js?example';
import ArrayCheckbox from './examples/array-checkbox';
import sourceArrayCheckbox from './examples/array-checkbox.js?example';

export class PageCheckbox extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.__i18nWatch(() => {
      this.api = apis();
    }, true);
    this._examples = {
      singleCheckbox: {
        component: SingleCheckbox,
        source: sourceSingleCheckbox,
      },
      arrayCheckbox: {
        component: ArrayCheckbox,
        source: sourceArrayCheckbox,
      },
    };
  }
}
