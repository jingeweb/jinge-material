import { Component } from 'jinge';

import _tpl from './index.html';
import apis from './api';

import Text from './examples/text';
import sourceText from './examples/text?example';
import InputError from './examples/error';
import sourceInputError from './examples/error?example';
import Counter from './examples/counter';
import sourceCounter from './examples/counter?example';
import Icons from './examples/icons';
import sourceIcons from './examples/icons?example';
import Action from './examples/action';
import sourceAction from './examples/action?example';
import Fix from './examples/fix';
import sourceFix from './examples/fix?example';

export class PageInput extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.__i18nWatch(() => {
      this.api = apis();
    }, true);
    this._examples = {
      text: {
        component: Text,
        source: sourceText,
      },
      error: {
        component: InputError,
        source: sourceInputError,
      },
      counter: {
        component: Counter,
        source: sourceCounter,
      },
      icons: {
        component: Icons,
        source: sourceIcons,
      },
      action: {
        component: Action,
        source: sourceAction,
      },
      fix: {
        component: Fix,
        source: sourceFix,
      },
    };
  }
}
