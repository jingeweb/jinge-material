import './index.scss';

import {
  Component
} from 'jinge';

export class Avatar extends Component {
  static get template() {
    return `
<div class="md-avatar">
  <_slot />
</div>`;
  }
}