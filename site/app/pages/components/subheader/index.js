import {
  Component
} from 'jinge';
import _tpl from './index.html';

import Subheader from './examples/subheader';
import sourceSubheader from './examples/subheader?example';

export class PageSubheader extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this._examples = {
      subheader: {
        component: Subheader,
        source: sourceSubheader
      }
    };
  }
}
