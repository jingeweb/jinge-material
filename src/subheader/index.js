import './index.scss';

import { Component } from 'jinge';

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

  __afterRender() {
    const el = this.__firstDOM;
    this.tag = el.parentElement.classList.contains('md-list') ? 'li' : 'div';
  }
}
