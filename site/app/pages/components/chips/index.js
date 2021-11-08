import { Component } from 'jinge';

import _tpl from './index.html';
import apis from './api';

import Single from './examples/single';
import sourceSingle from './examples/single?example';
import Editable from './examples/editable';
import sourceEditable from './examples/editable?example';
import Static from './examples/static';
import sourceStatic from './examples/static?example';
import Template from './examples/template';
import sourceTemplate from './examples/template?example';
import Duplicated from './examples/duplicated';
import sourceDuplicated from './examples/duplicated?example';
import Theme from './examples/theme';
import sourceTheme from './examples/theme?example';

export class PageChips extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.__i18nWatch(() => {
      this.api = apis();
    }, true);
    this._examples = {
      single: {
        component: Single,
        source: sourceSingle,
      },
      editable: {
        component: Editable,
        source: sourceEditable,
      },
      static: {
        component: Static,
        source: sourceStatic,
      },
      template: {
        component: Template,
        source: sourceTemplate,
      },
      duplicated: {
        component: Duplicated,
        source: sourceDuplicated,
      },
      theme: {
        component: Theme,
        source: sourceTheme,
      },
    };
  }
}
