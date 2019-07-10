
import './card-media-actions.scss';

import {
  Component
} from 'jinge';

export class CardMediaActions extends Component {
  static get template() {
    return `
<div class="md-card-media-actions">
  <_slot />
</div>`;
  }
}