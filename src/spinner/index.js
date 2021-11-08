import './index.scss';

import { Component, isString } from 'jinge';

function csize(v, addPre) {
  if (v === 'normal') {
    v = 48;
  } else if (v === 'small') {
    v = 36;
  } else if (v === 'large') {
    v = 64;
  }
  if (!isString(v) || /^\d+$/.test(v)) {
    v += 'px';
  }
  return `${addPre ? ';' : ''}width:${v};height:${v}`;
}

export class Spinner extends Component {
  static get template() {
    return `
<div
  class="md-spinner\${_determinate ? ' md-determinate' : ' md-indeterminate'}\${className}"
  e:style="style"
>
  <svg
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    viewBox="0 0 48 48"
    ref:draw
  >
    <circle
      stroke-linecap="round"
      cx="50%" cy="50%"
      stroke-width="4"
      r="22"
      ref:circle
    ></circle>
  </svg>
</div>`;
  }

  constructor(attrs) {
    super(attrs);
    this.className = attrs.class ? ' ' + attrs.class : '';
    this._determinate = 'value' in attrs;
    this.value = attrs.value;
    this.style = (attrs.style || '') + (attrs.size ? csize(attrs.size, attrs.style) : '');
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
    const circle = this.__getRef('circle');
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
