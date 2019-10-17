import {
  Component,
  GET_CONTEXT,
  BEFORE_DESTROY
} from 'jinge';

import {
  TABLE_PROVIDER
} from './table';

export class TableColumn extends Component {
  static get template() {
    return null;
  }

  constructor(attrs) {
    super(attrs);
    this.prop = attrs.prop;
    this.label = attrs.label;

    this._Table = this[GET_CONTEXT](TABLE_PROVIDER);
    this._Table._add(this);
  }

  [BEFORE_DESTROY]() {
    this._Table._del(this);
    this._Table = null;
  }
}
