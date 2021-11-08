import { Component, isNumber } from 'jinge';
import { TABLE_PROVIDER } from './table';

function _w(v) {
  if (!v) return null;
  return isNumber(v) || /^\d+$/.test(v) ? v + 'px' : v;
}

export class TableColumn extends Component {
  constructor(attrs) {
    super(attrs);
    this.style = attrs.width ? `width: ${_w(attrs.width)}` : null;
    this.numeric = attrs.numeric;
    this.label = attrs.label;
    this.prop = attrs.prop;

    this._Table = this.__getContext(TABLE_PROVIDER);
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
