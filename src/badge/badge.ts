import './badge.scss';

import { Attributes, Component } from 'jinge';
import _tpl from './badge.html';

export interface BadgeAttrs {
  content?: string;
  dense?: boolean;
  position?: 'top' | 'bottom';
}
export class Badge extends Component {
  static template = _tpl;

  content: string;
  dense: boolean;
  position: BadgeAttrs['position'];

  constructor(attrs: Attributes<BadgeAttrs>) {
    super(attrs);
    this.content = attrs.content;
    this.dense = attrs.dense;
    this.position = attrs.position || 'top';
  }
}
