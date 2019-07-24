import {
  Component,
  GET_FIRST_DOM
} from 'jinge';

export class ListItemDefault extends Component {
  static get template() {
    return `
<!-- import { ListItemContent } from './list-item-content' -->
<div
  class="md-list-item-default\${className ? ' ' + className : ''}"
  on:click="toggleControl"
>
  <ListItemContent disabled>
    <_slot />
  </ListItemContent>
</div>
`;
  }
  constructor(attrs) {
    super(attrs);
    this.className = attrs.class;
  }
  toggleControl() {
    const $el = this[GET_FIRST_DOM]();
    const control = $el.querySelector('.md-checkbox-container, .md-switch-container, .md-radio-container');
    if (control) {
      control.click();
    }
  }
}