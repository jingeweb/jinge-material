import {
  Component
} from 'jinge';
import _tpl from './index.html';

import Basic from './examples/basic';
import sourceBasic from './examples/basic?example';
import Card from './examples/card';
import sourceCard from './examples/card?example';
import Template from './examples/template';
import sourceTemplate from './examples/template?example';
import Selection from './examples/selection';
import sourceSelection from './examples/selection?example';

export class PageTable extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this._examples = {
      basic: {
        component: Basic,
        source: sourceBasic
      },
      card: {
        component: Card,
        source: sourceCard
      },
      template: {
        component: Template,
        source: sourceTemplate
      },
      selection: {
        component: Selection,
        source: sourceSelection
      }
    };
  }
}
