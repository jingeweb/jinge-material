import './menu.scss';

import {
  Component
} from 'jinge';

import {
  EnumAttrValidator
} from '../_util';

const sizeValidator = new EnumAttrValidator(
  '<md-menu>', 'size', [
    'auto', 'small', 'medium', 'big', 'huge'
  ]
);

export class Menu extends Component {
  static get template() {
    return `
<div class="md-menu">
  <_slot />
</div>`;
  }
  constructor(attrs) {
    sizeValidator.assert(attrs);

    super(attrs);

    this.active = attrs.active;
    this.alignTrigger = attrs.alignTrigger;
    this.offsetX = attrs.offsetX;
    this.offsetY = attrs.offsetY;
    this.fullWidth = attrs.fullWidth;
    this.dense = attrs.dense;
    this.placement = attrs.placement || 'bottom-start';
    this.closeOnSelect = attrs.closeOnSelect !== false;
    this.closeOnClick = attrs.closeOnClick;
    this.size = attrs.size || 'small';
  }
}