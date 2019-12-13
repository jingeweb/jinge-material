import {
  Component,
  I18N_WATCH
} from 'jinge';
import _tpl from './index.html';

import Router from './examples/router';
import sourceRouter from './examples/router?example';
import Content from './examples/content';
import sourceContent from './examples/content?example';
import Alignments from './examples/alignments';
import sourceAlignments from './examples/alignments?example';
import Icons from './examples/icons';
import sourceIcons from './examples/icons?example';
import Template from './examples/template';
import sourceTemplate from './examples/template?example';

import apis from './api';

export class PageTabs extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this[I18N_WATCH](() => {
      this.api = apis();
    }, true);
    this._examples = {
      router: {
        component: Router,
        source: sourceRouter
      },
      content: {
        component: Content,
        source: sourceContent
      },
      alignments: {
        component: Alignments,
        source: sourceAlignments
      },
      icons: {
        component: Icons,
        source: sourceIcons
      },
      template: {
        component: Template,
        source: sourceTemplate
      }
    };
  }
}
