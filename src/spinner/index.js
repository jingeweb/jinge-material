import './index.scss';

import {
  Component,
  GET_REF,
  UPDATE_IF_NEED,
  AFTER_RENDER
} from 'jinge';

const W = 60;
const S = 6;

export class Spinner extends Component {
  static get template() {
    return `
<div
  class="md-spinner\${_determinate ? ' md-determinate' : ' md-indeterminate'}\${className}"
>
  <svg
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    viewBox="0 0 60 60"
    ref:draw
  >
    <circle
      stroke-linecap="round"
      cx="50%" cy="50%"
      stroke-width="6"
      r="27"
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
    this.diameter = Number(attrs.diameter || 60);
  }
  get value() {
    return this._value;
  }
  set value(v) {
    if (!this._determinate) return;
    v = Number(v);
    if (this._value === v) return;
    this._value = v;
    this[UPDATE_IF_NEED](this.attachCircleStyle);
  }
  attachCircleStyle () {
    const circle = this[GET_REF]('circle');
    // circle.style.strokeDasharray = 
    circle.style.strokeDashoffset = 2 * Math.PI * 27 * (100 - this.value) / 100 + 'px';
  }
  [AFTER_RENDER]() {
    if (this._determinate) {
      this.attachCircleStyle();
    }
  }
}