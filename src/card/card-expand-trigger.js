
import './card-expand.scss';

import {
  Component,
  GET_CONTEXT,
  AFTER_RENDER,
  GET_FIRST_DOM,
  DOM_ON,
  addClass
} from 'jinge';
import {
  CARD_PROVIDER
} from './card';

export class CardExpandTrigger extends Component {
  static get template() {
    return `
<_slot><div/></_slot>`;
  }

  constructor(attrs) {
    super(attrs);
    this.marginTop = 0;
    this.transitionEnabled = true;
    this.card = this[GET_CONTEXT](CARD_PROVIDER);
  }

  [AFTER_RENDER]() {
    const $el = this[GET_FIRST_DOM]();
    addClass($el, 'md-card-expand-trigger');
    this[DOM_ON]($el, 'click', this._onClick);
  }

  _onClick() {
    this.card.expand = !this.card.expand;
  }
}
