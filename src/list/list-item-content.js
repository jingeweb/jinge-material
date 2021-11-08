import { Component } from 'jinge';

export class ListItemContent extends Component {
  static get template() {
    return `
<!-- import { Ripple } from '../ripple'; -->
<Ripple class="md-list-item-content" e:disabled="disabled">
  <_slot />
</Ripple>
`;
  }

  constructor(attrs) {
    super(attrs);
    this.disabled = attrs.disabled;
  }
}
