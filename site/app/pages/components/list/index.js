import { Component } from 'jinge';
import { interactionEvents } from '../../../../../src/_util';
import _tpl from './index.html';
import apis from './api';

import SingleLine from './examples/single-line';
import sourceSingleLine from './examples/single-line?example';
import DoubleLine from './examples/double-line';
import sourceDoubleLine from './examples/double-line?example';
import TripleLine from './examples/triple-line';
import sourceTripleLine from './examples/triple-line?example';
import ListTypes from './examples/list-types';
import sourceListTypes from './examples/list-types?example';
import Controls from './examples/controls';
import sourceControls from './examples/controls?example';
import Expansion from './examples/expansion';
import sourceExpansion from './examples/expansion?example';

export class PageList extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.__i18nWatch(() => {
      this.api = apis();
    }, true);
    this._interactionEvents = interactionEvents;
    this._examples = {
      singleLine: {
        component: SingleLine,
        source: sourceSingleLine,
      },
      doubleLine: {
        component: DoubleLine,
        source: sourceDoubleLine,
      },
      tripleLine: {
        component: TripleLine,
        source: sourceTripleLine,
      },
      listTypes: {
        component: ListTypes,
        source: sourceListTypes,
      },
      controls: {
        component: Controls,
        source: sourceControls,
      },
      expansion: {
        component: Expansion,
        source: sourceExpansion,
      },
    };
  }
}
