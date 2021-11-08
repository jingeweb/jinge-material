import './card-expand.scss';

import { Component } from 'jinge';
import { CARD_PROVIDER } from './card';

export class CardExpandTrigger extends Component {
  static get template() {
    return `
<_slot><div/></_slot>`;
  }

  constructor(attrs) {
    super(attrs);
    this.marginTop = 0;
    this.transitionEnabled = true;
    this.card = this.__getContext(CARD_PROVIDER);
  }

  __afterRender() {
    const $el = this.__firstDOM;
    $el.classList.add('md-card-expand-trigger');
    this.__domAddListener($el, 'click', this._onClick);
  }

  _onClick() {
    this.card.expand = !this.card.expand;
  }
}
