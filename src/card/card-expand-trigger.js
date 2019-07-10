
import './card-expand.scss';

import {
  Component,
  GET_CONTEXT,
  AFTER_RENDER,
  GET_FIRST_DOM,
  BEFORE_DESTROY
} from 'jinge';
import {
  CARD_PROVIDER
} from './card';
import {
  addClass,
  addEvent,
  removeEvent
} from 'jinge/dom';

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
    this._ch = this._onClick.bind(this);
  }
  [AFTER_RENDER]() {
    const $el = this[GET_FIRST_DOM]();
    addClass($el, 'md-card-expand-trigger');
    addEvent($el, 'click', this._ch);
  }
  _onClick() {
    this.card.expand = !this.card.expand;
  }
  [BEFORE_DESTROY]() {
    const $el = this[GET_FIRST_DOM]();
    removeEvent($el, 'click', this._ch);
  }
}