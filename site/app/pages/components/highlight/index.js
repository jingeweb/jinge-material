import { Component } from 'jinge';

import _tpl from './index.html';
import apis from './api';

import Text from './examples/text';
import sourceText from './examples/text?example';

export class PageHighlight extends Component {
  static get template() {
    return _tpl;
  }

  static get style() {
    return `
div ::deep .md-highlight-text-match {
  color: #448aff;
}`;
  }

  constructor(attrs) {
    super(attrs);
    this.__i18nWatch(() => {
      this.api = apis();
    }, true);
    this._examples = {
      text: {
        component: Text,
        source: sourceText,
      },
    };
  }
}
