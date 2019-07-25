import {
  Component
} from 'jinge';

import _tpl from './index.html';
import apis from './api';

import SimplePopconfirm from './examples/simple';
import sourceSimplePopconfirm from './examples/simple.js?example';

export class PagePopconfirm extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this._api = apis;
    this._examples = {
      simple: {
        component: SimplePopconfirm,
        source: sourceSimplePopconfirm
      }
    };
  }
}
