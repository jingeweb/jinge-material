import { Attributes, Component, isNumber } from 'jinge';
import { Table, TABLE_PROVIDER } from './table';

function _w(v: string | number) {
  if (!v) return null;
  return isNumber(v) || /^\d+$/.test(v) ? v + 'px' : v;
}

export interface TableColumnAttrs {
  width?: string | number;
  numeric?: boolean;
  label: string;
  prop: string;
}
export class TableColumn extends Component {
  style: string;
  numeric: boolean;
  label: string;
  prop: string;
  _Table: Table;

  constructor(attrs: Attributes<TableColumnAttrs>) {
    super(attrs);

    this.style = attrs.width ? `width: ${_w(attrs.width)}` : null;
    this.numeric = attrs.numeric;
    this.label = attrs.label;
    this.prop = attrs.prop;

    this._Table = this.__getContext(TABLE_PROVIDER) as Table;
    this._Table._addC(this);
  }

  __render() {
    return [document.createComment('')];
  }

  __beforeDestroy() {
    this._Table._delC(this);
    this._Table = null;
  }
}
