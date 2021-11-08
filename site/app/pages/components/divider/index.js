import { Component } from 'jinge';
import _tpl from './index.html';
import apis from './api';

import Divider from './examples/divider';
import sourceDivider from './examples/divider?example';

export class PageDivider extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.__i18nWatch(() => {
      this.api = apis();
    }, true);
    this._examples = {
      divider: {
        component: Divider,
        source: sourceDivider,
      },
    };
  }
}
