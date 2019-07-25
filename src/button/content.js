import './content.scss';

import {
  Component,
  NOTIFY
} from 'jinge';

export class ButtonContent extends Component {
  static get template() {
    return `
<md-ripple
  e:disabled="!ripple || disabled"
  e:eventTrigger="false"
  e:active="rippleActive"
  on:update.active="onRippleActive"
>
  <div class="md-button-content">
    <_slot slot-use:default/>
  </div>
</md-ripple>`;
  }

  constructor(attrs) {
    super(attrs);
    this.ripple = attrs.ripple;
    this.rippleActive = attrs.rippleActive;
    this.disabled = attrs.disabled;
  }

  onRippleActive(evt) {
    this[NOTIFY]('update.rippleActive', evt);
  }
}
