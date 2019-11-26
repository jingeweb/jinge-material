import {
  Component
} from 'jinge';

export class ListItemButton extends Component {
  static get template() {
    return `
<!-- import { ListItemContent } from './list-item-content' -->
<button
  type="button"
  class="md-list-item-button md-state-container\${className ? ' ' + className : ''}"
  e:disabled="disabled"
>
  <div class="md-state-overlay"></div>
  <ListItemContent e:disabled="disabled || !ripple">
    <_slot />
  </ListItemContent>
</button>
`;
  }

  constructor(attrs) {
    super(attrs);
    this.ripple = attrs.ripple !== false;
    this.disabled = attrs.disabled;
    this.className = attrs.class;
  }
}
