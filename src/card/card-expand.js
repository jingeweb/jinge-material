
import './card-expand.scss';

import {
  Component
} from 'jinge';

export class CardExpand extends Component {
  static get template() {
    return `
<div class="md-card-expand">
  <_slot />
</div>`;
  }
}
