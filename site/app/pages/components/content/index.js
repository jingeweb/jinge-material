import { Component } from 'jinge';

import _tpl from './index.html';
import apis from './api';

import PaperContent from './examples/paper-content';
import sourcePaperContent from './examples/paper-content.js?example';

export class PageContent extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.__i18nWatch(() => {
      this.api = apis();
    }, true);
    this._examples = {
      paperContent: {
        component: PaperContent,
        source: sourcePaperContent,
      },
    };
  }
}
