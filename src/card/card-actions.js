import './card-actions.scss';

import {
  Component
} from 'jinge';

export class CardActions extends Component {
  static get template() {
    return `
<div class="md-card-actions md-alignment-\${alignment}">
  <_slot />
</div>`;
  }

  constructor(attrs) {
    super(attrs);
    this.alignment = attrs.alignment || 'right';
  }
}
