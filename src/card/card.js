import './card.scss';

import {
  Component, vm
} from 'jinge';

export const CARD_PROVIDER = Symbol('card_provider');
export class Card extends Component {
  static get template() {
    return `
<div class="md-card\${className}\${withHover ? ' md-with-hover' : ''}\${card.expand ? ' md-expand-active' : ''}">
  <_slot />
</div>`;
  }

  constructor(attrs) {
    super(attrs);
    this.withHover = attrs.withHover;
    this.className = attrs.class ? ' ' + attrs.class : '';
    this.card = vm({
      expand: false
    });
    this.__setContext(CARD_PROVIDER, this.card);
  }
}
