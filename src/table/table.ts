import {
  Component,
  vm,
  __,
  attrs as wrapAttrs,
  arrayRemove,
  arrayPushIfNotExist,
  isArray,
  createElementWithoutAttrs,
  Attributes,
} from 'jinge';
import { FunctionAttrValidator } from '../_util/attr-validator';
import { TableColumn } from './column';
import { TableRow } from './row';

import _tpl from './table.html';

export const TABLE_PROVIDER = Symbol('table_provider');
const rowClassValidator = new FunctionAttrValidator('<md-table>', 'rowClass');

export interface TableAttrs {
  data: unknown[];
  selectable?: boolean;
  rowClass?: () => string;
  selection?: unknown[];
  rowLoopKey?: 'index' | string;
  columnLoopKey?: 'index' | string;
}
export class Table extends Component {
  static template = _tpl;

  selectionMask: unknown[];
  selectionCount: number;
  _helper: { $dom: HTMLElement; el: Component };
  _data: unknown[];
  _selection: unknown[];
  rowClass: () => string;
  selectable: boolean;
  _rowLoopKey: string;
  _columnLoopKey: string;
  columns: unknown[];

  constructor(attrs: Attributes<TableAttrs>) {
    rowClassValidator.assert(attrs);
    super(attrs);

    this.selectionMask = vm([]);
    this.selectionCount = 0;
    this._helper = {
      $dom: null,
      el: null,
    };

    this.data = attrs.data;
    this.rowClass = attrs.rowClass;
    this.selectable = attrs.selectable;
    this.selection = attrs.selection;
    this._rowLoopKey = attrs.rowLoopKey || 'index';
    this._columnLoopKey = attrs.columnLoopKey || 'index';

    this.columns = vm([]);

    this.__setContext(TABLE_PROVIDER, this, true);
    this._updateSelectionMask();
  }

  __render() {
    this._renderHelperColumns();
    return super.__render();
  }

  get data() {
    return this._data;
  }

  set data(v) {
    if (this._data === v) return;
    this._data = v;
    if (v && !isArray(v)) {
      throw new Error('<md-table>: data attribute must be Array.');
    }
    if (this.selection && this.selection.length > 0) {
      this.__updateIfNeed(this._updateSelectionMask);
    }
  }

  get selection() {
    return this._selection;
  }

  set selection(v) {
    if (this._selection === v) return;
    this._selection = v;
    if (this.data && this.data.length > 0) {
      this.__updateIfNeed(this._updateSelectionMask);
    }
  }

  _updateSelectionMask() {
    const data = this.data;
    if (!data || data.length === 0) {
      this.selectionMask.length = 0;
      this.selectionCount = 0;
      return;
    }

    this.selectionMask.length = data.length;
    let sc = 0;
    data.forEach((d, i) => {
      const isS = this.selection ? this.selection.indexOf(d) >= 0 : false;
      if (isS) {
        sc++;
      }
      this.selectionMask[i] = isS;
    });
    this.selectionCount = sc;
  }

  _renderHelperColumns() {
    const $container = createElementWithoutAttrs('div') as HTMLDivElement;
    const el = new Component(
      wrapAttrs({
        [__]: {
          context: this[__].context,
          slots: this[__].slots,
        },
      }),
    );
    el.__renderToDOM($container, false);
    this._helper.$dom = $container;
    this._helper.el = el;
  }

  __beforeDestroy() {
    this._helper.el.__destroy(true);
    this._helper.$dom = null;
  }

  _addC(column: TableColumn) {
    arrayPushIfNotExist(this.columns, column);
  }

  _delC(column: TableColumn) {
    arrayRemove(this.columns, column);
  }

  toggleAllSelect() {
    const total = this.selectionMask.length;
    this.selectionCount = this.selectionCount === total ? 0 : total;
    this.selectionMask.fill(this.selectionCount === total);
    this._updateSelection();
  }

  onRowSelect(row: TableRow) {
    this.selectionMask[row.index] = row.selected;
    this.selectionCount += row.selected ? 1 : -1;
    this._updateSelection();
  }

  _updateSelection() {
    this._selection =
      this.selectionCount === 0
        ? vm([])
        : this.selectionCount === this.selectionMask.length
        ? this.data.slice()
        : this.data.filter((d, i) => {
            return this.selectionMask[i];
          });
    this.__notify('select', this._selection);
  }
}
