import './list.scss';

import { Component, arrayPushIfNotExist, arrayRemove } from 'jinge';

export const LIST_PROVIDER = Symbol('list_provider');
export class List extends Component {
  static get template() {
    return `
<ul class="md-list\${className ? ' ' + className : ''}" e:style="style">
  <_slot />
</ul>`;
  }

  constructor(attrs) {
    super(attrs);
    this.className = attrs.class;
    this.style = attrs.style;
    this.expandSingle = attrs.expandSingle;
    this._List = {
      expandable: [],
      expandATab: this.expandATab.bind(this),
      pushExpandable: this.pushExpandable.bind(this),
      removeExpandable: this.removeExpandable.bind(this),
    };
    this.__setContext(LIST_PROVIDER, this._List, true);
  }

  expandATab(expandedListItem) {
    if (!this.expandSingle || !expandedListItem) {
      return;
    }
    for (const item of this._List.expandable) {
      if (item !== expandedListItem) {
        item.close();
      }
    }
  }

  pushExpandable(expandableListItem) {
    arrayPushIfNotExist(this._List.expandable, expandableListItem);
  }

  removeExpandable(expandableListItem) {
    arrayRemove(this._List.expandable, expandableListItem);
  }
}
