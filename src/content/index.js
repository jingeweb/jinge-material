import './index.scss';

import {
  Component
} from 'jinge';

export class Content extends Component {
  static get template() {
    return `
<div e:class="className" e:style="style">
  <_slot/>
</div>`;
  }

  constructor(attrs) {
    super(attrs);
    this.className = 'md-content' + (attrs.class ? ' ' + attrs.class : '');
    this.style = attrs.style;
  }
}
