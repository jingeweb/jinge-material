import { Attributes, Component } from 'jinge';
import _tpl from './list-item-button.html';

export interface ListItemButtonAttrs {
  ripple?: boolean;
  disabled?: boolean;
}
export class ListItemButton extends Component {
  static template = _tpl;

  ripple: boolean;
  disabled: boolean;

  constructor(attrs: Attributes<ListItemButtonAttrs>) {
    super(attrs);
    this.ripple = attrs.ripple !== false;
    this.disabled = attrs.disabled;
  }
}
