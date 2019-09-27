import './optgroup.scss';

import {
  Component,
  Symbol,
  SET_CONTEXT
} from 'jinge';

export const OPTGROUP_PROVIDER = Symbol('optgroup_provider');
export class Optgroup extends Component {
  static get template() {
    return `
<div class="md-optgroup" on:mousedown="stop">
  <md-subheader>\${ label }</md-subheader>
  <_slot />
</div>`;
  }

  constructor(attrs) {
    super(attrs);
    this.label = attrs.label;
    this.disabled = attrs.disabled;
    this[SET_CONTEXT](OPTGROUP_PROVIDER, this);
  }

  stop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }
}
