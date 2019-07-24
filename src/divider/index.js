import './index.scss';

import {
  Component,
  AFTER_RENDER,
  GET_FIRST_DOM
} from 'jinge';
import {
  hasClass,
  replaceChild,
  createElement
} from 'jinge/dom';

export class Divider extends Component {
  static get template() {
    return '<hr class="md-divider"/>';
  }
  constructor(attrs) {
    super(attrs);
  }
  [AFTER_RENDER]() {
    const el = this[GET_FIRST_DOM]();
    const pa = el.parentNode;
    if (hasClass(el.parentNode, 'md-list')) {
      replaceChild(pa, createElement('li', {
        class: 'md-divider'
      }), el);
    }
  }
}