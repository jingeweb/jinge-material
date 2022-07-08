import { Attributes, Component, ViewModelObject, vm } from 'jinge';
import _tpl from './card.html';

export const CARD_PROVIDER = Symbol('card_provider');
export interface CardAttrs {
  withHover?: boolean;
}
export type CardWrapper = ViewModelObject & {
  expand: boolean;
};
export class Card extends Component {
  static template = _tpl;

  withHover: boolean;
  card: CardWrapper;

  constructor(attrs: Attributes<CardAttrs>) {
    super(attrs);
    this.withHover = attrs.withHover;
    this.card = vm({
      expand: false,
    });
    this.__setContext(CARD_PROVIDER, this.card);
  }
}
