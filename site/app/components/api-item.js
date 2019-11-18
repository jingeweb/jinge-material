import {
  Component,
  ARG_COMPONENTS
} from 'jinge';

import _tpl from './api-item.html';

export class ApiItem extends Component {
  static get style() {
    return `
.api-item-navigation /deep/ > .md-button {
  min-width: 56px;
  margin: 4px 0;
}
.api-item-navigation /deep/ > .md-button + .md-button {
  margin-left: 4px;
}`;
  }

  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this._title = attrs.title;
    const slots = Object.keys(this[ARG_COMPONENTS])
      .filter(slotName => slotName !== 'default')
      .map(slotName => ({
        name: slotName,
        title: slotName.replace(
          /(?:^|\s)\S/g,
          transformed => transformed.toUpperCase()
        ).replace(/-/g, ' '),
        render: this[ARG_COMPONENTS][slotName]
      }));
    this._slots = slots;
    this.currentSlot = slots.length > 0 ? slots[0].name : null;
  }
}
