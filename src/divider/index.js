import './index.scss';

import {
  Component,
  AFTER_RENDER,
  GET_FIRST_DOM
} from 'jinge';
import {
  hasClass
} from 'jinge/dom';

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

  [AFTER_RENDER]() {
    const el = this[GET_FIRST_DOM]();
    this.tag = hasClass(el.parentNode, 'md-list') ? 'li' : 'hr';
  }
}
