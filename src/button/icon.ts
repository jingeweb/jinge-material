import { Attributes } from 'jinge';
import { BaseButton, BaseButtonAttrs, ContainerTypes } from './base';

import _tpl from './button.html';

export interface IconButtonAttrs extends BaseButtonAttrs {
  type?: 'standard' | 'filled' | 'filled-tonal' | 'outlined';
  /** 是否是可切换按钮，对应于 m3 设计规范里的 toggle */
  toggle?: boolean;
  /** 当 toggle 为 true 时，selected 指定是否是选中状态 */
  selected?: boolean;
}

//! @jinge-component-parse 继承的 BaseButton 无法被编译器识别，强制标记需要 parse。
export class IconButton extends BaseButton {
  static template = _tpl;

  _toggle: boolean;
  selected: boolean;

  constructor(attrs: Attributes<IconButtonAttrs>) {
    super(attrs, 'ic');

    this._type = attrs.type || 'standard';
    this._ctype = ContainerTypes[this._type] || 'md-surface';
    this._toggle = attrs.toggle;
    this.selected = attrs.selected;
  }
}
