import {
  Component
} from 'jinge';

export class ListItemLink extends Component {
  static get template() {
    return `
<!-- import { ListItemContent } from './list-item-content' -->
<a
  class="md-list-item-link\${className ? ' ' + className : ''}"
  e:disabled="disabled"
  e:href="href"
  e:target="target"
>
  <ListItemContent e:disabled="disabled || !ripple">
    <_slot />
  </ListItemContent>
</a>
`;
  }

  constructor(attrs) {
    super(attrs);
    this.ripple = attrs.ripple !== false;
    this.disabled = attrs.disabled;
    this.href = attrs.href;
    this.target = attrs.target;
    this.className = attrs.class;
  }
}
