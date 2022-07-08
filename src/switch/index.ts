import { Attributes } from 'jinge';
import { Checkbox, CheckboxAttrs } from '../checkbox';

import _tpl from './index.html';

export class Switch extends Checkbox {
  static template = _tpl;

  constructor(attrs: Attributes<CheckboxAttrs>) {
    super(attrs, 'switch');
  }
}
