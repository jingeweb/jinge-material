import { Attributes } from 'jinge';
import { BaseButton } from './base';

import _tpl from './button.html';

export interface FAButtonAttrs {
  type?: 'surface' | 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'normal' | 'large';
  lowered?: boolean;
  extended?: boolean;
}

export class FloatActionButton extends BaseButton {
  static template = _tpl;

  _size: string;
  _low: boolean;
  _ext: boolean;

  constructor(attrs: Attributes<FAButtonAttrs>) {
    super(attrs, 'fa');

    this._type = attrs.type === 'surface' ? 'surface' : (attrs.type || 'primary') + '-container';
    this._size = attrs.size;
    this._low = attrs.lowered;
    this._ext = attrs.extended;
  }
}
