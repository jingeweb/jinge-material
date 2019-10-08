import {
  Component
} from 'jinge';

import _tpl from './index.html';
import apis from './api';

import Basic from './examples/basic';
import sourceBasic from './examples/basic?example';
import Init from './examples/init';
import sourceInit from './examples/init?example';
import Immediately from './examples/immediately';
import sourceImmediately from './examples/immediately?example';
import Disable from './examples/disable';
import sourceDisable from './examples/disable?example';

export class PageDatepicker extends Component {
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
      init: {
        component: Init,
        source: sourceInit
      },
      immediately: {
        component: Immediately,
        source: sourceImmediately
      },
      disable: {
        component: Disable,
        source: sourceDisable
      }
    };
  }
}
