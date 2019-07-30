import './menu.scss';

import {
  Component,
  Symbol,
  isUndefined,
  SET_CONTEXT,
  NOTIFY,
  UPDATE_IF_NEED,
  AFTER_RENDER,
  GET_FIRST_DOM
} from 'jinge';
import {
  startsWith,
  endsWith
} from 'jinge/util';
import {
  EnumAttrValidator,
  mergePopperOpts
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
    this.popperOffset = null;
    this.offset = attrs.offset;
    this.placement = attrs.placement || 'bottom-start';
    this.closeOnSelect = attrs.closeOnSelect !== false;
    this.closeOnOutsideClick = attrs.closeOnOutsideClick !== false;
    this.size = attrs.size || 'auto';
    this._popperOptions = mergePopperOpts({
      modifiers: {
        keepTogether: {
          enabled: true
        },
        flip: {
          enabled: false
        }
      }
    }, attrs._popperOptions);
    this.listClass = attrs.listClass;

    this._Menu = {
      close: this.close.bind(this)
    };
    this[SET_CONTEXT](MENU_PROVIDER, this._Menu, true);
  }

  get placement() {
    return this._placement;
  }

  set placement(v) {
    if (this._placement === v) return;
    this._placement = v;
    this[UPDATE_IF_NEED](this.updateOffset);
  }

  get offset() {
    return this._offset;
  }

  set offset(v) {
    if (this._offset === v) return;
    this._offset = v;
    this[UPDATE_IF_NEED](this.updateOffset);
  }

  onUpdateActive(isActive) {
    this.active = isActive;
    this[NOTIFY]('update.active', isActive);
    this[NOTIFY](isActive ? 'opened' : 'closed');
  }

  close() {
    if (!this.active || !this.closeOnSelect) return;
    this.active = !this.active;
    this[NOTIFY]('update.active', this.active, 'close');
    this[NOTIFY]('closed');
  }

  [AFTER_RENDER]() {
    this.updateOffset();
  }

  updateOffset() {
    if (!isUndefined(this.offset) && this.offset !== null) {
      if (this.popperOffset !== this.offset) {
        this.popperOffset = this.offset;
      }
      return;
    }
    const el = this[GET_FIRST_DOM]();
    const pl = this.placement;
    let offsetX = 0;
    let offsetY = 0;
    if (startsWith(pl, 'bottom') || startsWith(pl, 'top')) {
      offsetY = -(el.offsetHeight + 11);
      if (endsWith(pl, '-start')) {
        offsetX = -8;
      } else if (endsWith(pl, '-end')) {
        offsetX = 8;
      }
    } else {
      offsetY = -(el.offsetWidth + 8);
      if (endsWith(pl, '-start')) {
        offsetX = -11;
      } else if (endsWith(pl, '-end')) {
        offsetX = 11;
      }
    }
    this.popperOffset = `${offsetX}, ${offsetY}`;
  }
}
