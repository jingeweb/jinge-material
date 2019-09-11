import './index.scss';

import {
  Component
} from 'jinge';

export class Avatar extends Component {
  static get template() {
    return `
<div class="md-avatar\${className ? ' ' + className : ''}" e:style="style">
  <_slot />
</div>`;
  }

  constructor(attrs) {
    super(attrs);
    this.className = attrs.class;
    this.style = attrs.style;
  }
}
