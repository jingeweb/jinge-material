import { Attributes, Component } from 'jinge';
import _tpl from './list-item-link.html';

export interface ListItemLinkAttrs {
  ripple?: boolean;
  disabled?: boolean;
  href?: string;
  target?: string;
}
export class ListItemLink extends Component {
  static template = _tpl;

  ripple?: boolean;
  disabled?: boolean;
  href?: string;
  target?: string;
  constructor(attrs: Attributes<ListItemLinkAttrs>) {
    super(attrs);
    this.ripple = attrs.ripple !== false;
    this.disabled = attrs.disabled;
    this.href = attrs.href;
    this.target = attrs.target;
  }
}
