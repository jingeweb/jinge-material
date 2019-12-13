import {
  Component,
  I18N_WATCH
} from 'jinge';

import _tpl from './index.html';
import apis from './api';

import SimpleTooltip from './examples/simple';
import sourceSimpleTooltip from './examples/simple.js?example';

export class PageTooltip extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this[I18N_WATCH](() => {
      this.api = apis();
    }, true);
    this._examples = {
      simple: {
        component: SimpleTooltip,
        source: sourceSimpleTooltip
      }
    };
  }
}
