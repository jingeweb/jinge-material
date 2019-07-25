
import './card-content.scss';

import {
  Component
} from 'jinge';

export class CardContent extends Component {
  static get template() {
    return `
<div class="md-card-content">
  <_slot />
</div>`;
  }
}
