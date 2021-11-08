import './dialog-content.scss';

import { Component } from 'jinge';

export class DialogContent extends Component {
  static get template() {
    return `
<div class="md-dialog-content\${className ? ' ' + className : ''}">
  <_slot />
</div>`;
  }

  constructor(attrs) {
    super(attrs);

    this.className = attrs.class;
  }
}
