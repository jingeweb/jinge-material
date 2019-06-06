import './index.scss';

import {
  Checkbox
} from '../checkbox';

import _tpl from './index.html';

export class Switch extends Checkbox {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs, 'switch');
  }
}