import { Attributes, Component } from 'jinge';
import { MENU_PROVIDER } from './menu';
import _tpl from './menu-item.html';

const IGNORED_EVENTS = [
  // 'touchstart', 'mousedown'
  'click',
];

export interface MenuItemAttrs {
  ripple?: boolean;
  disabled?: boolean;
  href?: string;
  to?: string;
  target?: string;
  active?: boolean;
  expand?: boolean;
  expanded?: boolean;
}
export class MenuItem extends Component {
  static template = _tpl;

  ripple?: boolean;
  disabled?: boolean;
  href?: string;
  to?: string;
  target?: string;
  active?: boolean;
  expand?: boolean;
  expanded?: boolean;
  _Menu: {
    close: () => void;
  };
  _tch: () => void;

  constructor(attrs: Attributes<MenuItemAttrs>) {
    super(attrs);
    this.ripple = attrs.ripple;
    this.disabled = attrs.disabled;
    this.href = attrs.href;
    this.to = attrs.to;
    this.target = attrs.target;
    this.active = attrs.active;
    this.expand = attrs.expand;
    this.expanded = attrs.expanded;

    this._Menu = this.__getContext(MENU_PROVIDER);
    this._tch = this.triggerCloseMenu.bind(this);
  }

  handleClick(event: MouseEvent) {
    !this.disabled && this._Menu.close();
    this.__notify('click', event);
  }

  triggerCloseMenu() {
    if (!this.disabled) {
      this._Menu.close();
    }
  }

  __afterRender() {
    /**
     * 在移动设备上，只有 <button> 可以响应 click 等全部事件。
     * 因此，将外部的事件监听全部绑定到 <li> 元素的子元素（<button>或<a>）上。
     */
    const $el = (this.__firstDOM as HTMLElement).children[0];
    this.__domPassListeners(IGNORED_EVENTS, $el as HTMLElement);
  }
}
