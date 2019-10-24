import {
  Component,
  NOTIFY,
  UPDATE_IF_NEED,
  vmWatch
} from 'jinge';

import _tpl from './row.html';

export class TableRow extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);

    this.className = null;

    this.selectable = attrs.selectable;
    this.columns = attrs.columns;
    this.data = attrs.data;
    this.index = attrs.index;
    this.rowClassFn = attrs.rowClass;
    this.selected = attrs.selected;

    vmWatch(attrs, 'data.**', props => {
      console.log(props);
      this[UPDATE_IF_NEED](this._updateClass);
    });
    this._updateClass();
  }

  get rowClassFn() {
    return this._rcFn;
  }

  set rowClassFn(v) {
    if (this._rcFn === v) return;
    this._rcFn = v;
    this[UPDATE_IF_NEED](this._updateClass);
  }

  toggleSelect() {
    this.selected = !this.selected;
    this[NOTIFY]('select', this);
  }

  _updateClass() {
    this.className = this.rowClassFn ? this.rowClassFn(this.data, this.index) : null;
  }
}
