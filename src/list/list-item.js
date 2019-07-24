import {
  Component
} from 'jinge';

import _tpl from './list-item.html';

function getTag(attrs) {
  if (attrs.expand) return 'expand';
  if (attrs.disabled) return 'button';
  if (attrs.to) return 'sref';
  if (attrs.href) return 'link';
  return 'default';
}

export class ListItem extends Component {
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.className = attrs.class;
    this.style = attrs.style;

    this.ripple = attrs.ripple;
    this.disabled = attrs.disabled;
   
    this._tag = getTag(attrs);
    this.href= attrs.href;
    this.to = attrs.to;
    this.target = attrs.target || '_self';

  }
}