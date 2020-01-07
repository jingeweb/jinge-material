import {
  Component
} from 'jinge';

import _tpl from './index.html';
import apis from './api';

import MaterialIcons from './examples/material-icons.js';
import sourceMaterialIcons from './examples/material-icons.js?example';
import FontIcons from './examples/font-icons.js';
import sourceFontIcons from './examples/font-icons.js?example';
import SvgIcons from './examples/svg-icons.js';
import sourceSvgIcons from './examples/svg-icons.js?example';

export class PageIcon extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.__i18nWatch(() => {
      this.api = apis();
    }, true);
    this._examples = {
      materialIcons: {
        component: MaterialIcons,
        source: sourceMaterialIcons
      },
      fontIcons: {
        component: FontIcons,
        source: sourceFontIcons
      },
      svgIcons: {
        component: SvgIcons,
        source: sourceSvgIcons
      }
    };
  }
}
