import { Attributes, Component, watch } from 'jinge';
import { TableColumn } from './column';
import _tpl from './row.html';

export interface TableRowAttrs {
  selectable?: boolean;
  columns: TableColumn[];
  data: unknown;
  index: number;
  rowClass: (data: unknown, index: number) => string;
  selected?: boolean;
}
export class TableRow extends Component {
  static template = _tpl;

  selectable: boolean;
  columns: TableColumn[];
  data: unknown;
  index: number;
  _rcFn: TableRowAttrs['rowClass'];
  selected: boolean;

  constructor(attrs: Attributes<TableRowAttrs>) {
    super(attrs);

    this.selectable = attrs.selectable;
    this.columns = attrs.columns;
    this.data = attrs.data;
    this.index = attrs.index;
    this.rowClassFn = attrs.rowClass;
    this.selected = attrs.selected;

    watch(attrs, 'data.**', () => {
      if (this.rowClassFn) {
        this.__updateIfNeed(this._updateClass);
      }
    });
    this._updateClass();
  }

  get rowClassFn() {
    return this._rcFn;
  }

  set rowClassFn(v) {
    if (this._rcFn === v) return;
    this._rcFn = v;
    this.__updateIfNeed(this._updateClass);
  }

  toggleSelect() {
    this.selected = !this.selected;
    this.__notify('select', this);
  }

  _updateClass() {
    this.class = this.rowClassFn ? this.rowClassFn(this.data, this.index) : null;
  }
}
