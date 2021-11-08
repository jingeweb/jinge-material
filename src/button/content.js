import './content.scss';

import { Component } from 'jinge';

export class ButtonContent extends Component {
  static get template() {
    return `
<!-- import { Ripple } from '../ripple'; -->
<Ripple
  e:disabled="!ripple || disabled"
  e:eventTrigger="false"
  e:active="rippleActive"
  on:update.active="onRippleActive"
>
  <div class="md-button-content">
    <_slot slot-use:default/>
  </div>
</Ripple>`;
  }

  constructor(attrs) {
    super(attrs);
    this.ripple = attrs.ripple;
    this.rippleActive = attrs.rippleActive;
    this.disabled = attrs.disabled;
  }

  onRippleActive(evt) {
    this.__notify('update.rippleActive', evt);
  }
}
