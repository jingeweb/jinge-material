import { Component } from 'jinge';

import _tpl from './index.html';
import apis from './api';

import Basic from './examples/basic';
import sourceBasic from './examples/basic?example';
import Multiple from './examples/multiple';
import sourceMultiple from './examples/multiple?example';
import Dense from './examples/dense';
import sourceDense from './examples/dense?example';
import Groups from './examples/groups';
import sourceGroups from './examples/groups?example';
import Disabled from './examples/disabled';
import sourceDisabled from './examples/disabled?example';

export class PageSelect extends Component {
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
        source: sourceBasic,
      },
      multiple: {
        component: Multiple,
        source: sourceMultiple,
      },
      dense: {
        component: Dense,
        source: sourceDense,
      },
      groups: {
        component: Groups,
        source: sourceGroups,
      },
      disabled: {
        component: Disabled,
        source: sourceDisabled,
      },
    };
  }
}
