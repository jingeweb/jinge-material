import { Attributes, Component } from 'jinge';
import _tpl from './card-actions.html';

export interface CardActionsAttrs {
  alignment?: 'right' | 'left';
}
export class CardActions extends Component {
  static template = _tpl;

  alignment: CardActionsAttrs['alignment'];

  constructor(attrs: Attributes<CardActionsAttrs>) {
    super(attrs);
    this.alignment = attrs.alignment || 'right';
  }
}
