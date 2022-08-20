import { Attributes, Component } from 'jinge';
import { MENU_PROVIDER } from './common';
import { Menu } from './menu';
import _tpl from './menu-item.html';

export interface MenuItemAttrs {
  disabled?: boolean;
}
export class MenuItem extends Component {
  static template = _tpl;

  disabled?: boolean;

  _Menu: Menu;
  _tch: () => void;

  constructor(attrs: Attributes<MenuItemAttrs>) {
    super(attrs);
    this.disabled = attrs.disabled;

    this._Menu = this.__getContext(MENU_PROVIDER);
  }

  onclick(event: MouseEvent) {
    this.__notify('click', event);
    !this.disabled && this._Menu.close();
  }
}
