import './card-expand.scss';

import { Attributes, Component } from 'jinge';
import { CardWrapper, CARD_PROVIDER } from './card';
import _tpl from './card-expand-trigger.html';

export class CardExpandTrigger extends Component {
  static template = _tpl;

  marginTop: number;
  transitionEnabled: boolean;
  card: CardWrapper;

  constructor(attrs: Attributes) {
    super(attrs);
    this.marginTop = 0;
    this.transitionEnabled = true;
    this.card = this.__getContext(CARD_PROVIDER);
  }

  __afterRender() {
    const $el = this.__firstDOM as HTMLElement;
    $el.classList.add('md-card-expand-trigger');
    this.__domAddListener($el, 'click', this._onClick);
  }

  _onClick() {
    this.card.expand = !this.card.expand;
  }
}
