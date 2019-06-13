import './dialog-content.scss';

import {
  Component
} from 'jinge';

export class DialogContent extends Component {
  static get template() {
    return `
<div class="md-dialog-content">
  <_slot />
</div>`;
  }
}