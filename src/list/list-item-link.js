import {
  Component
} from 'jinge';

export class ListItemLink extends Component {
  static get template() {
    return `
<!-- import { ListItemContent } from './list-item-content' -->
<a
  class="md-state-container md-content-on-surface md-list-item-link\${className ? ' ' + className : ''}"
  e:disabled="disabled"
  e:href="href"
  e:target="target"
>
  <i class="md-state-overlay"/>
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
