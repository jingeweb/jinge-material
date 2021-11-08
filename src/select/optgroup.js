import './optgroup.scss';

import { Component } from 'jinge';

export const OPTGROUP_PROVIDER = Symbol('optgroup_provider');
export class Optgroup extends Component {
  static get template() {
    return `
<!-- import { Subheader } from '../subheader'; -->
<div class="md-optgroup" on:mousedown="stop">
  <Subheader>\${ label }</Subheader>
  <_slot />
</div>`;
  }

  constructor(attrs) {
    super(attrs);
    this.label = attrs.label;
    this.disabled = attrs.disabled;
    this.__setContext(OPTGROUP_PROVIDER, this);
  }

  stop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }
}
