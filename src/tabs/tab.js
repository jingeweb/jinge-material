import {
  Component,
  uid,
  GET_CONTEXT,
  AFTER_RENDER,
  BEFORE_DESTROY
} from 'jinge';
import {
  TABS_PROVIDER
} from './tabs';

import _tpl from './tab.html';

export class Tab extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.id = attrs.id || `md-tab-${uid()}`;
    this.disabled = attrs.disabled;
    this.label = attrs.label;
    this.to = attrs.to;
    this.params = attrs.params;
    this.href = attrs.href;
    this.isActive = false;
    this._Tabs = this[GET_CONTEXT](TABS_PROVIDER);
  }

  [AFTER_RENDER]() {
    this._Tabs._add(this);
  }

  [BEFORE_DESTROY]() {
    this._Tabs._remove(this);
    this._Tabs = null;
  }
}
