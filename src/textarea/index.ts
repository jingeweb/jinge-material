import { Attributes, uid } from 'jinge';
import { BaseField, BaseFieldAttrs } from '../field/base';

import _tpl from './index.html';

export interface TextareaAttrs {
  id?: string;
  autogrow?: boolean;
  cols?: string | number;
  rows?: string | number;
}

//! @jinge-component-parse 继承的 BaseField 无法被编译器识别，强制标记需要 parse。
export class Textarea extends BaseField {
  static template = _tpl;

  id: string;
  cols: string | number;
  rows: string | number;
  _lineCount: number;
  _autogrow: boolean;

  constructor(attrs: Attributes<TextareaAttrs & BaseFieldAttrs>) {
    super(attrs, 'md-input');
    this.id = attrs.id || `md-textarea-${uid()}`;
    this.autogrow = attrs.autogrow;
    this.cols = attrs.cols;
    this.rows = attrs.rows;
    this._lineCount = 0;
    // don't forget to call parent's _updateFieldClass
    this.Field.hasTextarea = true;
    this.Field._updateFieldClass();
  }

  __afterRender() {
    this.__domPassListeners(['input', 'change']);
    super.__afterRender();
    if (this.autogrow) {
      this._calcStyles(this.__firstDOM as HTMLElement);
    }
  }

  __beforeDestroy() {
    this.Field.hasTextarea = false;
    super.__beforeDestroy();
  }

  _calcStyles(el: HTMLElement) {
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

  onInput(evt: InputEvent) {
    this.value = (evt.target as HTMLInputElement).value;
    if (this.autogrow) {
      this._calcStyles(this.__firstDOM as HTMLElement);
    }
  }
}
