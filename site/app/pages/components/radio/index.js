import { Component } from 'jinge';
import _tpl from './index.html';
import apis from './api';

import SimpleRadio from './examples/simple-radios';
import sourceSimpleRadio from './examples/simple-radios.js?example';

export class PageRadio extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.__i18nWatch(() => {
      this.api = apis();
    }, true);
    this._examples = {
      simpleRadio: {
        component: SimpleRadio,
        source: sourceSimpleRadio,
      },
    };
  }
}
