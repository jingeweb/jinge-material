import { Attributes, Component } from 'jinge';
import _tpl from './list-item-content.html';

export interface ListItemContentAttrs {
  disabled?: boolean;
}
export class ListItemContent extends Component {
  static template = _tpl;

  disabled: boolean;

  constructor(attrs: Attributes<ListItemContentAttrs>) {
    super(attrs);
    this.disabled = attrs.disabled;
  }
}
