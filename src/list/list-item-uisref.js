import {
  Component
} from 'jinge';

export class ListItemUISref extends Component {
  static get template() {
    return `
<!-- 
 import { ListItemContent } from './list-item-content';
 import { UISref } from 'jinge-ui-router';
-->
<UISref
  e:to="to"
  e:target="target"
>
  <a
    class="md-list-item-router\${className ? ' ' + className : ''}"
    e:disabled="disabled"
  >
    <ListItemContent e:disabled="disabled || !ripple">
      <_slot />
    </ListItemContent>
  </a>
</UISref>
`;
  }
  constructor(attrs) {
    super(attrs);
    this.ripple = attrs.ripple;
    this.disabled = attrs.disabled;
    this.className = attrs.class;
    this.to = attrs.to;
    this.target = attrs.target;
  }
}