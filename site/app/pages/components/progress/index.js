import { Component } from 'jinge';

import _tpl from './index.html';
import apis from './api';

import DeterminateProgress from './examples/determinate';
import sourceDeterminateProgress from './examples/determinate.js?example';
import IndeterminateProgress from './examples/indeterminate';
import sourceIndeterminateProgress from './examples/indeterminate.js?example';
import BufferProgress from './examples/buffer';
import sourceBufferProgress from './examples/buffer.js?example';
import QueryProgress from './examples/query';
import sourceQueryProgress from './examples/query.js?example';

export class PageProgress extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.__i18nWatch(() => {
      this.api = apis();
    }, true);
    this._examples = {
      determinate: {
        component: DeterminateProgress,
        source: sourceDeterminateProgress,
      },
      indeterminate: {
        component: IndeterminateProgress,
        source: sourceIndeterminateProgress,
      },
      buffer: {
        component: BufferProgress,
        source: sourceBufferProgress,
      },
      query: {
        component: QueryProgress,
        source: sourceQueryProgress,
      },
    };
  }
}
