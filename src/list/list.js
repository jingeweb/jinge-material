import './list.scss';

import {
  Component,
  VM,
  Symbol,
  SET_CONTEXT
} from 'jinge';

export const LIST_CONTEXT = Symbol('list_context');
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
    this.List = VM({
      expandable: [],
      _expandATab: this.expandATab.bind(this),
      _pushExpandable: this.pushExpandable.bind(this),
      _removeExpandable: this.removeExpandable.bind(this)
    });
    this[SET_CONTEXT](LIST_CONTEXT, this.List);
  }

  expandATab(expandedListItem) {
    if (this.expandSingle && expandedListItem) {
      const otherExpandableListItems = this.List.expandable.filter(target => target !== expandedListItem);
      otherExpandableListItems.forEach(expandableListItem => expandableListItem.close());
    }
  }

  pushExpandable(expandableListItem) {
    const expandableListItems = this.List.expandable;

    if (!expandableListItems.find(target => target === expandableListItem)) {
      this.List.expandable = expandableListItems.concat([expandableListItem]);
    }
  }

  removeExpandable(expandableListItem) {
    const expandableListItems = this.List.expandable;

    if (expandableListItems.find(target => target === expandableListItem)) {
      this.List.expandable = expandableListItems.filter(target => target !== expandableListItem);
    }
  }
}
