import {
  Component,
  VM
} from 'jinge';

import _tpl from './api-item.html';
import {
  ARG_COMPONENTS
} from 'jinge/core/component';

export class ApiItem extends Component {
  static get style() {
    return `.md-button {
  min-width: 56px;
  margin: 4px 0;
}
.md-button + .md-button {
  margin-left: 4px;
}`;
  }
  static get template() {
    return _tpl;
  }
  constructor(attrs) {
    super(attrs);
    this.slots = VM(Object.keys(this[ARG_COMPONENTS])
      .filter(slotName => slotName !== 'default')
      .map(slotName => ({
        name: slotName,
        title: slotName.replace(
          /(?:^|\s)\S/g,
          transformed => transformed.toUpperCase()
        ).replace(/-/g, ' '),
        _render: this[ARG_COMPONENTS][slotName]
      })));
    // console.log(this._slots);
    this.title = attrs.title;
    this.currentSlot = this.slots[0];
  }
}