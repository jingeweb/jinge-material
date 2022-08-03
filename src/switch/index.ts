import { Attributes } from 'jinge';
import { Checkbox, CheckboxAttrs } from '../checkbox';

import _tpl from './index.html';

//! @jinge-component-parse 继承的 Checkbox 无法被编译器识别，强制标记需要 parse。
export class Switch extends Checkbox {
  static template = _tpl;

  constructor(attrs: Attributes<CheckboxAttrs>) {
    super(attrs, 'switch');
  }
}
