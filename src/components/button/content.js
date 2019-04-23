import './content.scss';

import {
  Component
} from 'jinge';

export class ButtonContent extends Component {
  static get template() {
    return `
<!--
  import { Ripple } from '../ripple';
-->
<Ripple
  e:disabled="!ripple || disabled"
  e:eventTrigger="false"
  e:active="rippleActive"
  on:update.active="notify('update.rippleActive', args[0])"
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
}
