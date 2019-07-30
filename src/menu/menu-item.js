import {
  Component,
  GET_CONTEXT,
  AFTER_RENDER,
  BEFORE_DESTROY,
  NOTIFY
} from 'jinge';
import {
  MENU_PROVIDER
} from './menu';
import {
  bindDOMListeners,
  unbindDOMListeners
} from 'jinge/core/component';

const IGNORED_EVENTS = [
  'touchstart', 'mousedown'
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
  on:touchstart="touchstart($event)"
  on:mousedown="mousedown($event)"
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

  mousedown($evt) {
    this[NOTIFY]('mousedown', $evt);
    this._Menu.close();
  }

  touchstart($evt) {
    this[NOTIFY]('touchstart', $evt);
    this._Menu.close();
  }

  triggerCloseMenu() {
    if (!this.disabled) {
      this.closeMenu();
    }
  }

  [AFTER_RENDER]() {
    bindDOMListeners(this, IGNORED_EVENTS);
  }

  [BEFORE_DESTROY]() {
    unbindDOMListeners(this);
  }
}
