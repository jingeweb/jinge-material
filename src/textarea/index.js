import {
  uid
} from 'jinge';
import {
  BaseField
} from '../field/base';

import _tpl from './index.html';

export class Textarea extends BaseField {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs, 'md-input');
    this.id = attrs.id || `md-textarea-${uid()}`;
    this.autogrow = attrs.autogrow;
    this.cols = attrs.cols;
    this.rows = attrs.rows;
    this.style = attrs.style;
    this._lineCount = 0;
    // don't forget to call parent's _updateFieldClass
    this.Field.hasTextarea = true;
    this.Field._updateFieldClass();
  }

  __afterRender() {
    this.__domPassListeners(['input', 'change']);
    super.__afterRender();
    if (this.autogrow) {
      this._calcStyles(this.__firstDOM);
    }
  }

  __beforeDestroy() {
    this.Field.hasTextarea = false;
    super.__beforeDestroy();
  }

  _calcStyles(el) {
    el.style.height = '0';
    el.style.height = `${el.scrollHeight}px`;
  }

  get autogrow() {
    return this._autogrow;
  }

  set autogrow(v) {
    if (this._autogrow === v) return;
    this._autogrow = v;
    this.Field.autogrow = v;
  }

  onInput(evt) {
    this.value = evt.target.value;
    if (this.autogrow) {
      this._calcStyles(this.__firstDOM);
    }
  }
}
