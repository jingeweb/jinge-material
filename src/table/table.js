import {
  Component,
  Symbol,
  VM,
  SET_CONTEXT,
  CONTEXT,
  NOTIFY,
  RENDER,
  wrapAttrs,
  ARG_COMPONENTS,
  BEFORE_DESTROY
} from 'jinge';
import {
  arrayRemove,
  arrayPushIfNotExist,
  isArray
} from 'jinge/util';
import {
  createElementWithoutAttrs
} from 'jinge/dom';
import {
  RENDER_TO_DOM,
  DESTROY,
  UPDATE_IF_NEED
} from 'jinge/core/component';
import {
  FunctionAttrValidator
} from '../_util/attr-validator';

import _tpl from './table.html';

export const TABLE_PROVIDER = Symbol('table_provider');
const rowClassValidator = new FunctionAttrValidator(
  '<md-table>', 'rowClass'
);

export class Table extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    rowClassValidator.assert(attrs);
    super(attrs);

    this.selectionMask = VM([]);
    this.selectionCount = 0;
    this._helper = {
      $dom: null,
      el: null
    };

    this.data = attrs.data;
    this.rowClass = attrs.rowClass;
    this.selectable = attrs.selectable;
    this.selection = attrs.selection;
    this._rowLoopKey = attrs.rowLoopKey || 'index';
    this._columnLoopKey = attrs.columnLoopKey || 'index';

    this.columns = VM([]);

    this[SET_CONTEXT](TABLE_PROVIDER, this, true);
    this._updateSelectionMask();
  }

  [RENDER]() {
    this._renderHelperColumns();
    return super[RENDER]();
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
      this[UPDATE_IF_NEED](this._updateSelectionMask);
    }
  }

  get selection() {
    return this._selection;
  }

  set selection(v) {
    if (this._selection === v) return;
    this._selection = v;
    if (this.data && this.data.length > 0) {
      this[UPDATE_IF_NEED](this._updateSelectionMask);
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
    const $container = createElementWithoutAttrs('div');
    const el = new Component(wrapAttrs({
      [CONTEXT]: this[CONTEXT],
      [ARG_COMPONENTS]: this[ARG_COMPONENTS]
    }));
    el[RENDER_TO_DOM]($container, false);
    this._helper.$dom = $container;
    this._helper.el = el;
  }

  [BEFORE_DESTROY]() {
    this._helper.el[DESTROY](true);
    this._helper.$dom = null;
  }

  _addC(column) {
    arrayPushIfNotExist(this.columns, column);
  }

  _delC(column) {
    arrayRemove(this.columns, column);
  }

  toggleAllSelect(evt) {
    const total = this.selectionMask.length;
    this.selectionCount = this.selectionCount === total ? 0 : total;
    this.selectionMask.fill(this.selectionCount === total);
    this._updateSelection();
  }

  onRowSelect(row) {
    this.selectionMask[row.index] = row.selected;
    this.selectionCount += row.selected ? 1 : -1;
    this._updateSelection();
  }

  _updateSelection() {
    this._selection = this.selectionCount === 0 ? VM([]) : (
      this.selectionCount === this.selectionMask.length ? this.data.slice() : this.data.filter((d, i) => {
        return this.selectionMask[i];
      })
    );
    this[NOTIFY]('select', this._selection);
  }
}
