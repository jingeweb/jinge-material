import './dialog-actions.scss';

import { Component } from 'jinge';

export class DialogActions extends Component {
  static get template() {
    return `
<div class="md-dialog-actions">
  <_slot />
</div>`;
  }
}
