import { Attributes, Component, isString } from 'jinge';
import _tpl from './index.html';

function csize(v: SpinnerAttrs['size']) {
  if (v === 'normal') {
    v = 48;
  } else if (v === 'small') {
    v = 36;
  } else if (v === 'large') {
    v = 64;
  }
  if (isString(v)) {
    v = parseInt(v);
  }
  return v;
}

export interface SpinnerAttrs {
  size?: 'normal' | 'small' | 'large' | number;
  value?: number;
}

export class Spinner extends Component {
  static template = _tpl;

  _determinate: boolean;
  _value: number;
  size: number;

  constructor(attrs: Attributes<SpinnerAttrs>) {
    super(attrs);
    this._determinate = 'value' in attrs;
    this.value = attrs.value;
    this.size = csize(attrs.size);
  }

  get value() {
    return this._value;
  }

  set value(v) {
    if (!this._determinate) return;
    v = Number(v);
    if (this._value === v) return;
    this._value = v;
    this.__updateIfNeed(this.attachCircleStyle);
  }

  attachCircleStyle() {
    const circle = this.__getRef('circle') as HTMLElement;
    let v = this.value;
    if (v > 100) v = 100;
    else if (v < 0) v = 0;
    circle.style.strokeDashoffset = (2 * Math.PI * 22 * (100 - v)) / 100 + 'px';
  }

  __afterRender() {
    if (this._determinate) {
      this.attachCircleStyle();
    }
  }
}
