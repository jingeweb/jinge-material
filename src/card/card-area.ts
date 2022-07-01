import './card-area.scss';

import { Attributes, Component } from 'jinge';
import _tpl from './card-area.html';

export interface CardAreaAttrs {
  inset?: boolean;
}
export class CardArea extends Component {
  static template = _tpl;

  inset: boolean;

  constructor(attrs: Attributes<CardArea>) {
    super(attrs);
    this.inset = !!attrs.inset;
  }
}
