import {
  Component
} from 'jinge';

import _tpl from './index.html';
import apis from './apis';

import Basic from './examples/basic';
import sourceBasic from './examples/basic?example';

export class PageStates extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);

    this.api = apis();
    this._examples = {
      basic: {
        component: Basic,
        source: sourceBasic
      }
    };
  }
}
