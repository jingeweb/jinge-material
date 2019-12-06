import {
  Component,
  GET_CONTEXT,
  AFTER_RENDER,
  NOTIFY,
  DOM_PASS_LISTENERS,
  GET_FIRST_DOM
} from 'jinge';
import {
  MENU_PROVIDER
} from './menu';

const IGNORED_EVENTS = [
  // 'touchstart', 'mousedown'
  'click'
];

export class MenuItem extends Component {
  static get template() {
    return `
<md-list-item
  class="md-menu-item\${highlighted ? ' md-highlight' : ''}\${className ? ' ' + className : ''}"
  e:style="style"
  e:href="href"
  e:to="to"
  e:target="target"
  e:ripple="ripple"
  e:params="params"
  e:active="active"
  e:expand="expand"
  e:expanded="expanded"
  e:disabled="disabled"
  e:tabindex="highlighted && -1"
  on:click="handleClick"
>
  <_slot />
</md-list-item>`;
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
    this.params = attrs.params;
    this.active = attrs.active;
    this.expand = attrs.expand;
    this.expanded = attrs.expanded;

    this._Menu = this[GET_CONTEXT](MENU_PROVIDER);
    this._tch = this.triggerCloseMenu.bind(this);
  }

  handleClick(event) {
    !this.disabled && this._Menu.close();
    this[NOTIFY]('click', event);
  }

  triggerCloseMenu() {
    if (!this.disabled) {
      this.closeMenu();
    }
  }

  [AFTER_RENDER]() {
    /**
     * 在移动设备上，只有 <button> 可以响应 click 等全部事件。
     * 因此，将外部的事件监听全部绑定到 <li> 元素的子元素（<button>或<a>）上。
     */
    const $el = this[GET_FIRST_DOM]().children[0];
    this[DOM_PASS_LISTENERS](IGNORED_EVENTS, $el);
  }
}
