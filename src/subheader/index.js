import './index.scss';

import {
  Component,
  AFTER_RENDER,
  GET_FIRST_DOM
} from 'jinge';
import {
  hasClass
} from 'jinge/dom';

export class Subheader extends Component {
  static get template() {
    return `
<switch e:test="tag">
  <span slot-pass:default></span>
  <li slot-pass:li class="md-subheader"><_slot/></li>
  <div slot-pass:div class="md-subheader"><_slot/></div>
</switch>`;
  }

  constructor(attrs) {
    super(attrs);
    this.tag = '';
  }

  [AFTER_RENDER]() {
    const el = this[GET_FIRST_DOM]();
    this.tag = hasClass(el.parentNode, 'md-list') ? 'li' : 'div';
  }
}
