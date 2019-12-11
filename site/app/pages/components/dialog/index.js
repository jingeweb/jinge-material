import {
  Component,
  I18N_WATCH
} from 'jinge';

import _tpl from './index.html';
import apis from './api';

import CustomMarkup from './examples/custom';
import sourceCustomMarkup from './examples/custom.js?example';
import Alert from './examples/alert';
import sourceAlert from './examples/alert.js?example';
import Confirm from './examples/confirm';
import sourceConfirm from './examples/confirm.js?example';
import Prompt from './examples/prompt';
import sourcePrompt from './examples/prompt?example';

export class PageDialog extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this[I18N_WATCH](() => {
      this.api = apis();
    }, true);
    this._examples = {
      customMarkup: {
        component: CustomMarkup,
        source: sourceCustomMarkup
      },
      dialogAlert: {
        component: Alert,
        source: sourceAlert
      },
      dialogConfirm: {
        component: Confirm,
        source: sourceConfirm
      },
      dialogPrompt: {
        component: Prompt,
        source: sourcePrompt
      }
    };
  }
}
