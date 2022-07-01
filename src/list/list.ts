import './list.scss';

import { Component, arrayPushIfNotExist, arrayRemove, Attributes } from 'jinge';
import _tpl from './list.html';

export const LIST_PROVIDER = Symbol('list_provider');
export interface ListAttrs {
  expandSingle?: boolean;
}
interface ListItem {
  close: () => void;
}
export interface ListWrapper {
  expandable: ListItem[];
  expandATab: () => void;
  pushExpandable: () => void;
  removeExpandable: () => void;
}
export class List extends Component {
  static template = _tpl;

  expandSingle: boolean;
  _List: ListWrapper;

  constructor(attrs: Attributes<ListAttrs>) {
    super(attrs);
    this.expandSingle = attrs.expandSingle;
    this._List = {
      expandable: [],
      expandATab: this.expandATab.bind(this),
      pushExpandable: this.pushExpandable.bind(this),
      removeExpandable: this.removeExpandable.bind(this),
    };
    this.__setContext(LIST_PROVIDER, this._List, true);
  }

  expandATab(expandedListItem: ListItem) {
    if (!this.expandSingle || !expandedListItem) {
      return;
    }
    for (const item of this._List.expandable) {
      if (item !== expandedListItem) {
        item.close();
      }
    }
  }

  pushExpandable(expandableListItem: ListItem) {
    arrayPushIfNotExist(this._List.expandable, expandableListItem);
  }

  removeExpandable(expandableListItem: ListItem) {
    arrayRemove(this._List.expandable, expandableListItem);
  }
}
