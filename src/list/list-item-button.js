import {
  Component
} from 'jinge';

export class ListItemButton extends Component {
  static get template() {
    return `
<!-- import { ListItemContent } from './list-item-content' -->
<button
  type="button"
  class="md-list-item-button\${className ? ' ' + className : ''}"
  e:disabled="disabled"
>
  <ListItemContent e:disabled="disabled || !ripple">
    <_slot />
  </ListItemContent>
</button>
`;
  }
  constructor(attrs) {
    super(attrs);
    this.ripple = attrs.ripple;
    this.disabled = attrs.disabled;
    this.className = attrs.class;
  }
}