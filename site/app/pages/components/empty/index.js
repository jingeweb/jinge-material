import {
  Component
} from 'jinge';

import _tpl from './index.html';
import apis from './api';

import Basic from './examples/basic';
import sourceBasic from './examples/basic?example';
import Colors from './examples/colors';
import sourceColors from './examples/colors?example';
import Rounded from './examples/rounded';
import sourceRounded from './examples/rounded?example';

export class PageEmptyState extends Component {
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
      colors: {
        component: Colors,
        source: sourceColors
      },
      rounded: {
        component: Rounded,
        source: sourceRounded
      }
    };
  }
}
