import { Component } from 'jinge';
import { MENU_PROVIDER } from './menu';

const IGNORED_EVENTS = [
  // 'touchstart', 'mousedown'
  'click',
];

export class MenuItem extends Component {
  static get template() {
    return `
<!-- import { ListItem } from '../list'; -->
<ListItem
  class="md-menu-item\${highlighted ? ' md-highlight' : ''}\${className ? ' ' + className : ''}"
  e:style="style"
  e:href="href"
  e:to="to"
  e:target="target"
  e:ripple="ripple"
  e:active="active"
  e:expand="expand"
  e:expanded="expanded"
  e:disabled="disabled"
  e:tabindex="highlighted && -1"
  on:click="handleClick"
>
  <_slot />
</ListItem>`;
  }

  constructor(attrs) {
    super(attrs);
    this.className = attrs.class;
    this.style = attrs.style;
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

  handleClick(event) {
    !this.disabled && this._Menu.close();
    this.__notify('click', event);
  }

  triggerCloseMenu() {
    if (!this.disabled) {
      this.closeMenu();
    }
  }

  __afterRender() {
    /**
     * 在移动设备上，只有 <button> 可以响应 click 等全部事件。
     * 因此，将外部的事件监听全部绑定到 <li> 元素的子元素（<button>或<a>）上。
     */
    const $el = this.__firstDOM.children[0];
    this.__domPassListeners(IGNORED_EVENTS, $el);
  }
}
