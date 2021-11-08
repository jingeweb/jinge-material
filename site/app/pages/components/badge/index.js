import { Component } from 'jinge';
import _tpl from './index.html';
import apis from './api';

import Buttons from './examples/button';
import sourceButtons from './examples/button?example';
import Lists from './examples/list';
import sourceLists from './examples/list?example';
import Dense from './examples/dense';
import sourceDense from './examples/dense?example';

export class PageBadge extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.__i18nWatch(() => {
      this.api = apis();
    }, true);
    this._examples = {
      buttons: {
        component: Buttons,
        source: sourceButtons,
      },
      lists: {
        component: Lists,
        source: sourceLists,
      },
      dense: {
        component: Dense,
        source: sourceDense,
      },
    };
  }
}
