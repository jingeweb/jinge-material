import {
  Component
} from 'jinge';
import _tpl from './index.html';

import Router from './examples/router';
import sourceRouter from './examples/router?example';

import apis from './api';

export class PageTabs extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this._api = apis;
    this._examples = {
      router: {
        component: Router,
        source: sourceRouter
      }
    };
  }
}
