import './index.scss';

import { Component } from 'jinge';

import _tpl from './index.html';

export class Progress extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.className = (attrs.class ? ' ' + attrs.class : '') + ' md-' + (attrs.mode || 'determinate');
    this.mode = attrs.mode || 'determinate';
    this.value = Number(attrs.value || 0);
    this.buffer = Number(attrs.buffer || 0);
    this.valueStyle = null;
    this.trackStyle = null;
    this.bufferStyle = null;
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
