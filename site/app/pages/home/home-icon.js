import {
  Component
} from 'jinge';

import _sty from './home-icon.scss';

export class HomeIcon extends Component {
  static get template() {
    return `
<div class="home-icon\${className ? ' ' + className : ''}">
  <_slot />
</div>`;
  }

  static get style() {
    return _sty;
  }

  constructor(attrs) {
    super(attrs);
    this.className = attrs.class;
  }
}
