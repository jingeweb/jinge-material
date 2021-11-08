import './badge.scss';

import { Component } from 'jinge';

export class Badge extends Component {
  static get template() {
    return `
<!-- import { BadgeStandalone } from './standalone.js'; -->
<div class="md-badge-content">
  <_slot />
  <BadgeStandalone
    class="md-position-\${position}\${className ? ' ' + className : ''}\${dense ? ' md-dense' : ''}"
    e:style="style"
  >
    <div>
      \${ content }
    </div>
  </BadgeStandalone>
</div>`;
  }

  constructor(attrs) {
    super(attrs);
    this.content = attrs.content;
    this.dense = attrs.dense;
    this.position = attrs.position || 'top';
    this.className = attrs.class;
    this.style = attrs.style;
  }
}
