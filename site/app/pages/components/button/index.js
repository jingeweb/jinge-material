import {
  Component,
  I18N_WATCH
} from 'jinge';
import _tpl from './index.html';
import apis from './api';

import RegularButtons from './examples/regular-buttons';
import sourceRegularButtons from './examples/regular-buttons?example';
import IconButtons from './examples/icon-buttons';
import sourceIconButtons from './examples/icon-buttons.js?example';
import FloatingButtons from './examples/floating-buttons';
import sourceFloatingButtons from './examples/floating-buttons.js?example';
import LinkButtons from './examples/link-buttons';
import sourceLinkButtons from './examples/link-buttons.js?example';
import SrefButtons from './examples/uisref-buttons';
import sourceSrefButtons from './examples/uisref-buttons.js?example';

export class PageButton extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this[I18N_WATCH](() => {
      this.api = apis();
    }, true);
    this._examples = {
      regularButtons: {
        component: RegularButtons,
        source: sourceRegularButtons
      },
      iconButtons: {
        component: IconButtons,
        source: sourceIconButtons
      },
      floatingButtons: {
        component: FloatingButtons,
        source: sourceFloatingButtons
      },
      linkButtons: {
        component: LinkButtons,
        source: sourceLinkButtons
      },
      srefButtons: {
        component: SrefButtons,
        source: sourceSrefButtons
      }
    };
  }
}
