import './menu.scss';

import {
  Component,
  Symbol,
  SET_CONTEXT,
  AFTER_RENDER,
  GET_FIRST_DOM,
  BEFORE_DESTROY,
  NOTIFY
} from 'jinge';
import {
  EnumAttrValidator
} from '../_util';

import _tpl from './menu.html';

const sizeValidator = new EnumAttrValidator(
  '<md-menu>', 'size', [
    'auto', 'small', 'medium', 'big', 'huge'
  ]
);

export const MENU_PROVIDER = Symbol('menu_provider');

export class Menu extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    sizeValidator.assert(attrs);

    super(attrs);

    this.active = attrs.active;
    this.trigger = attrs.trigger || 'click';
    this.alignTrigger = attrs.alignTrigger;
    this.placement = attrs.placement || 'bottom';
    this.closeOnSelect = attrs.closeOnSelect !== false;
    this.closeOnOutsideClick = attrs.closeOnOutsideClick;
    this.size = attrs.size || 'small';
    this.listClass = attrs.listClass;

    this._Menu = {
      close: this.close.bind(this)
    };
    this[SET_CONTEXT](MENU_PROVIDER, this._Menu, true);
  }

  onUpdateActive(isActive) {
    this[NOTIFY]('update.active', isActive);
  }

  close() {
    this.active = !this.active;
  }
}
