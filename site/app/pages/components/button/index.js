import {
  Component 
} from 'jinge';
import _tpl from './index.html';
import apis from './api';

import RegularButtons from './examples/regular-buttons'; 
import sourceRegularButtons from './examples/regular-buttons?example';
import IconButtons from './examples/icon-buttons';
import sourceIconButtons from './examples/icon-buttons.js?example';
import FloatingButtons from './examples/floating-buttons';
import sourceFloatingButtons from './examples/floating-buttons.js?example';


export class PageButton extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this._api = apis;
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
      }
    };
  }
}
