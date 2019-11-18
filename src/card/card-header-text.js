
import './card-header.scss';

import {
  Component,
  AFTER_RENDER,
  GET_FIRST_DOM,
  BEFORE_DESTROY,
  hasClass,
  addClass,
  removeClass
} from 'jinge';

export class CardHeaderText extends Component {
  static get template() {
    return `
<div class="md-card-header-text">
  <_slot />
</div>`;
  }

  [AFTER_RENDER]() {
    const $pa = this[GET_FIRST_DOM]().parentElement;
    if ($pa && hasClass($pa, 'md-card-header')) {
      addClass($pa, 'md-card-header-flex');
    }
  }

  [BEFORE_DESTROY]() {
    const $pa = this[GET_FIRST_DOM]().parentElement;
    if ($pa) removeClass($pa, 'md-card-header-flex');
  }
}
