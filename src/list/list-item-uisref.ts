import { Attributes, Component } from 'jinge';
import _tpl from './list-item-uisref.html';

export interface ListItemUISrefAttrs {
  ripple?: boolean;
  disabled?: boolean;
  to?: string;
  active?: string;
  target?: string;
}
export class ListItemUISref extends Component {
  static template = _tpl;

  ripple?: boolean;
  disabled?: boolean;
  to?: string;
  active?: string;
  target?: string;

  constructor(attrs: Attributes<ListItemUISrefAttrs>) {
    super(attrs);
    this.ripple = attrs.ripple !== false;
    this.disabled = attrs.disabled;
    this.to = attrs.to;
    this.active = attrs.active || 'router-active';
    this.target = attrs.target;
  }
}
