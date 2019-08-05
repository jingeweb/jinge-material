import './bar.scss';

import {
  Component,
  uid,
  GET_CONTEXT,
  VM,
  AFTER_RENDER,
  BEFORE_DESTROY,
  NOTIFY
} from 'jinge';
import {
  bindDOMListeners,
  unbindDOMListeners
} from 'jinge/core/component';
import {
  BOTTOM_BAR_PROVIDER
} from './bar';

export class BottomBarItem extends Component {
  static get template() {
    return `
<md-button
  class="md-bottom-bar-item\${isActive ? ' md-active' : ''}"
  e:disabled="disabled"
  e:to="to"
  e:ripple="Bar.type === 'fixed'"
  e:active="active"
  e:target="target"
  e:params="params"
  on:click="onClick"
>
  <_slot/>
</md-button>`;
  }

  constructor(attrs) {
    super(attrs);
    this.id = attrs.id || uid();
    this.disabled = attrs.disabled;
    this.active = 'md-active' + (attrs.active ? ' ' + attrs.active : '');
    this.to = attrs.to;
    this.target = attrs.target;
    this.params = attrs.params;
    this.isActive = false;
    this.Bar = this[GET_CONTEXT](BOTTOM_BAR_PROVIDER);
  }

  onClick(evt) {
    if (this.Bar.type === 'shift') {
      this.Bar.mouseEvent = VM({
        _event: evt
      });
    }
    if (!this.to) {
      this.Bar._active(this.id);
    }
    this[NOTIFY]('click', evt);
  }

  [AFTER_RENDER]() {
    this.Bar._register(this);
    bindDOMListeners(this, ['click']);
  }

  [BEFORE_DESTROY]() {
    unbindDOMListeners(this);
  }
}
