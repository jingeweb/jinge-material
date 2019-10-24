import {
  Component,
  GET_CONTEXT,
  BEFORE_DESTROY,
  RENDER,
  isNumber
} from 'jinge';
import {
  TABLE_PROVIDER
} from './table';
import {
  createComment
} from 'jinge/dom';

function _w(v) {
  if (!v) return null;
  return isNumber(v) || /^\d+$/.test(v) ? v + 'px' : v;
}

export class TableColumn extends Component {
  [RENDER]() {
    return [createComment('')];
  }

  constructor(attrs) {
    super(attrs);
    this.style = attrs.width ? `width: ${_w(attrs.width)}` : null;
    this.numeric = attrs.numeric;
    this.label = attrs.label;
    this.prop = attrs.prop;

    this._Table = this[GET_CONTEXT](TABLE_PROVIDER);
    this._Table._addC(this);
  }

  [BEFORE_DESTROY]() {
    this._Table._delC(this);
    this._Table = null;
  }
}
