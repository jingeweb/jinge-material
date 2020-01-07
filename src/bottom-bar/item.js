import './bar.scss';

import {
  Component, uid, vm
} from 'jinge';
import {
  BOTTOM_BAR_PROVIDER
} from './bar';

export class BottomBarItem extends Component {
  static get template() {
    return `
<!-- import { Button } from '../button'; -->
<Button
  class="md-bottom-bar-item\${isActive ? ' md-active' : ''}"
  e:disabled="disabled"
  e:to="to"
  e:ripple="Bar.type === 'fixed'"
  e:active="active"
  e:target="target"
  on:click="onClick"
>
  <_slot/>
</Button>`;
  }

  constructor(attrs) {
    super(attrs);
    this.id = attrs.id || uid();
    this.disabled = attrs.disabled;
    this.active = 'md-active' + (attrs.active ? ' ' + attrs.active : '');
    this.to = attrs.to;
    this.target = attrs.target;
    this.isActive = false;
    this.Bar = this.__getContext(BOTTOM_BAR_PROVIDER);
  }

  onClick(evt) {
    if (this.Bar.type === 'shift') {
      this.Bar.mouseEvent = vm({
        _event: evt
      });
    }
    if (!this.to) {
      this.Bar._active(this.id);
    }
    this.__notify('click', evt);
  }

  __afterRender() {
    this.Bar._register(this);
    this.__domPassListeners(['click']);
  }
}
