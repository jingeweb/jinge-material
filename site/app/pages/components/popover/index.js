import {
  Component
} from 'jinge';

import _tpl from './index.html';
import apis from './api';

import SimplePopover from './examples/simple';
import sourceSimplePopover from './examples/simple.js?example';

export class PagePopover extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.__i18nWatch(() => {
      this.api = apis();
    }, true);
    this._examples = {
      simple: {
        component: SimplePopover,
        source: sourceSimplePopover
      }
    };
  }
}
