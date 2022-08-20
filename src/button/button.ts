import { Attributes } from 'jinge';
import { BaseButton, BaseButtonAttrs, ContainerTypes } from './base';

import _tpl from './button.html';

export interface ButtonAttrs extends BaseButtonAttrs {
  type?: 'elevated' | 'filled' | 'filled-tonal' | 'outlined' | 'text';
}

export class Button extends BaseButton {
  static template = _tpl;

  constructor(attrs: Attributes<ButtonAttrs>) {
    super(attrs);

    this._type = attrs.type || 'elevated';
    this._ctype = ContainerTypes[this._type] || 'md-surface';
  }
}
