import { Component } from 'jinge';

import _tpl from './index.html';
import apis from './apis';

import Columns from './examples/columns';
import sourceColumns from './examples/columns?example';
import Gutter from './examples/gutter';
import sourceGutter from './examples/gutter?example';
import Nested from './examples/nested';
import sourceNested from './examples/nested?example';
import Alignment from './examples/alignment';
import sourceAlignment from './examples/alignment?example';
import Hide from './examples/hide';
import sourceHide from './examples/hide?example';
import Sizes from './examples/sizes';
import sourceSizes from './examples/sizes?example';
import Responsive from './examples/responsive';
import sourceResponsive from './examples/responsive?example';

export class PageLayout extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);

    this.__i18nWatch(() => {
      this.api = apis();
    }, true);
    this._examples = {
      columns: {
        component: Columns,
        source: sourceColumns,
      },
      gutter: {
        component: Gutter,
        source: sourceGutter,
      },
      nested: {
        component: Nested,
        source: sourceNested,
      },
      alignment: {
        component: Alignment,
        source: sourceAlignment,
      },
      hide: {
        component: Hide,
        source: sourceHide,
      },
      sizes: {
        component: Sizes,
        source: sourceSizes,
      },
      responsive: {
        component: Responsive,
        source: sourceResponsive,
      },
    };
  }
}
