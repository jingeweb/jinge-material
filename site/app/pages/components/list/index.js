import {
  Component 
} from 'jinge';
import _tpl from './index.html';
import apis from './api';

import RegularButtons from './examples/regular-buttons'; 
import sourceRegularButtons from './examples/regular-buttons?example';

export class PageList extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this._api = apis;
    this._examples = {
      
    };
  }
}
