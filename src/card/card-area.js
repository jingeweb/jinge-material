import './card-area.scss';

import { Component } from 'jinge';

export class CardArea extends Component {
  static get template() {
    return `
<div class="md-card-area\${inset ? ' md-inset' : ''}">
  <_slot />
</div>`;
  }

  constructor(attrs) {
    super(attrs);
    this.inset = !!attrs.inset;
  }
}
