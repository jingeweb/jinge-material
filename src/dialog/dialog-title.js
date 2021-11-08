import './dialog-title.scss';

import { Component } from 'jinge';

export class DialogTitle extends Component {
  static get template() {
    return `
<span class="md-dialog-title md-title">
  <_slot />
</span>`;
  }
}
