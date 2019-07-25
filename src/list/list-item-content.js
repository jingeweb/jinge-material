import {
  Component
} from 'jinge';

export class ListItemContent extends Component {
  static get template() {
    return `
<md-ripple class="md-list-item-content" e:disabled="disabled">
  <_slot />
</md-ripple>
`;
  }

  constructor(attrs) {
    super(attrs);
    this.disabled = attrs.disabled;
  }
}
