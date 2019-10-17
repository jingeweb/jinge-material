import {
  Component,
  Symbol,
  SET_CONTEXT
} from 'jinge';

import _tpl from './table.html';

export const TABLE_PROVIDER = Symbol('table_provider');
export class Table extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.data = attrs.data;
    this.rowLoopKey = attrs.rowLoopKey || 'index';
    this.columnLoopKey = attrs.columnLoopKey || 'index';

    this[SET_CONTEXT](TABLE_PROVIDER, this);
  }
}
