import {
  Component
} from 'jinge';

import _tpl from './index.html';
import apis from './api';

import Basic from './examples/basic';
import sourceBasic from './examples/basic?example';
import Full from './examples/full';
import sourceFull from './examples/full?example';
import Disabled from './examples/disabled';
import sourceDisabled from './examples/disabled?example';

export class PagePagination extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this._api = apis;
    this._examples = {
      basic: {
        component: Basic,
        source: sourceBasic
      },
      full: {
        component: Full,
        source: sourceFull
      },
      disabled: {
        component: Disabled,
        source: sourceDisabled
      }
    };
  }
}
