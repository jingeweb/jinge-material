import { Attributes, Component } from 'jinge';

import _tpl from './index.html';

export interface ProgressAttrs {
  class?: string;
  mode?: 'determinate' | 'indeterminate' | 'query' | 'buffer';
  value?: number;
  buffer?: number;
}
export class Progress extends Component {
  static template = _tpl;

  _mode: ProgressAttrs['mode'];
  _value: number;
  _buffer: number;
  valueStyle?: string;
  trackStyle?: string;
  bufferStyle?: string;

  constructor(attrs: Attributes<ProgressAttrs>) {
    super(attrs);
    this.mode = attrs.mode || 'determinate';
    this.value = Number(attrs.value || 0);
    this.buffer = Number(attrs.buffer || 0);
    this.updateStyles();
  }

  get mode() {
    return this._mode;
  }

  set mode(v) {
    if (this._mode === v) return;
    this._mode = v;
    this.__updateIfNeed(this.updateStyles);
  }

  get value() {
    return this._value;
  }

  set value(v) {
    if (this._value === v) return;
    this._value = v;
    this.__updateIfNeed(this.updateStyles);
  }

  get buffer() {
    return this._buffer;
  }

  set buffer(v) {
    if (this._buffer === v) return;
    this._buffer = v;
    this.__updateIfNeed(this.updateStyles);
  }

  updateStyles() {
    this.valueStyle = null;
    this.trackStyle = null;
    this.bufferStyle = null;
    if (this.mode !== 'buffer' && this.mode !== 'determinate') {
      return;
    }
    this.valueStyle = `width:${this.value}%`;
    this.trackStyle = `width:${this.buffer}%`;
    this.bufferStyle = `left: calc(${this.buffer}% + 8px)`;
  }
}
