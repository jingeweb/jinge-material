import {
  Component
} from 'jinge';

import _tpl from './index.html';
import apis from './apis';

import Basic from './examples/basic';
import sourceBasic from './examples/basic?example';

export class PageTypography extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);

    this._api = apis;
    this._link = '<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic"/>';
    this._examples = {
      basic: {
        component: Basic,
        source: sourceBasic
      }
    };
  }
}
