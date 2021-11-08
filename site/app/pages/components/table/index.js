import { Component } from 'jinge';

import _tpl from './index.html';
import apis from './api';

import Basic from './examples/basic';
import sourceBasic from './examples/basic?example';
import Card from './examples/card';
import sourceCard from './examples/card?example';
import Template from './examples/template';
import sourceTemplate from './examples/template?example';
import Selection from './examples/selection';
import sourceSelection from './examples/selection?example';
import RowClass from './examples/row-class';
import sourceRowClass from './examples/row-class?example';
import Pagination from './examples/pagination';
import sourcePagination from './examples/pagination?example';

export class PageTable extends Component {
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
      card: {
        component: Card,
        source: sourceCard,
      },
      template: {
        component: Template,
        source: sourceTemplate,
      },
      selection: {
        component: Selection,
        source: sourceSelection,
      },
      rowClass: {
        component: RowClass,
        source: sourceRowClass,
      },
      pagination: {
        component: Pagination,
        source: sourcePagination,
      },
    };
  }
}
