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
import Light from './examples/light';
import sourceLight from './examples/light?example';

export class PagePagination extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.__i18nWatch(() => {
      this.api = apis();
    }, true);
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
      },
      light: {
        component: Light,
        source: sourceLight
      }
    };
  }
}
