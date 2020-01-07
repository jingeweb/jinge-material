import {
  Component
} from 'jinge';

import _tpl from './index.html';
import apis from './api';

import LoadingSpinner from './examples/loading.js';
import sourceLoadingSpinner from './examples/loading.js?example';
import ProgressSpinner from './examples/progress.js';
import sourceProgressSpinner from './examples/progress.js?example';
import ButtonSpinner from './examples/button.js';
import sourceButtonSpinner from './examples/button.js?example';

export class PageSpinner extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.__i18nWatch(() => {
      this.api = apis();
    }, true);
    this._examples = {
      loadingSpinner: {
        component: LoadingSpinner,
        source: sourceLoadingSpinner
      },
      progressSpinner: {
        component: ProgressSpinner,
        source: sourceProgressSpinner
      },
      buttonSpinner: {
        component: ButtonSpinner,
        source: sourceButtonSpinner
      }
    };
  }
}
