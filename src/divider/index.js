import './index.scss';

import { Component } from 'jinge';

export class Divider extends Component {
  static get template() {
    return `
<switch e:test="tag">
<hr slot-pass:default class="md-divider\${className ? ' ' + className : ''}"/>
<li slot-pass:li class="md-divider\${className ? ' ' + className : ''}"/>
</switch>`;
  }

  constructor(attrs) {
    super(attrs);
    this.tag = 'hr';
    this.className = attrs.class;
  }

  __afterRender() {
    const el = this.__firstDOM;
    this.tag = el.parentElement.classList.contains('md-list') ? 'li' : 'hr';
  }
}
