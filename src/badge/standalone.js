import './standalone.scss';

import { Component } from 'jinge';

export class BadgeStandalone extends Component {
  static get template() {
    return `
<div class="md-badge\${className ? ' ' + className : ''}" e:style="style">
  <_slot />
</div>`;
  }

  constructor(attrs) {
    super(attrs);
    this.className = attrs.class;
    this.style = attrs.style;
  }
}
