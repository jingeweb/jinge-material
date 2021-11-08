import { Component } from 'jinge';
import _tpl from './index.html';
import apis from './api';

import Regular from './examples/regular';
import sourceRegular from './examples/regular?example';
import Placeholder from './examples/placeholder';
import sourcePlaceholder from './examples/placeholder?example';
import Sizes from './examples/sizes';
import sourceSizes from './examples/sizes?example';

export class PageAvatar extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.__i18nWatch(() => {
      this.api = apis();
    }, true);
    this._examples = {
      regular: {
        component: Regular,
        source: sourceRegular,
      },
      placeholder: {
        component: Placeholder,
        source: sourcePlaceholder,
      },
      sizes: {
        component: Sizes,
        source: sourceSizes,
      },
    };
  }
}
