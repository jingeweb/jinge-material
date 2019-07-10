
import './card-header.scss';

import {
  Component
} from 'jinge';

export class CardHeader extends Component {
  static get template() {
    return `
<div class="md-card-header">
  <_slot />
</div>`;
  }
}