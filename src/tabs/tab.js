import { Component, uid, __ } from 'jinge';
import { TABS_PROVIDER } from './tabs';

import _tpl from './tab.html';

export class Tab extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this.id = attrs.id || `md-tab-${uid()}`;
    this.disabled = attrs.disabled;
    this.data = attrs.data;
    this.label = attrs.label;
    this.to = attrs.to;
    this.href = attrs.href;
    this.className = attrs.class;
    this.isActive = false;
    this._hasContent = !!(attrs[__].slots && attrs[__].slots.default);
    this._Tabs = this.__getContext(TABS_PROVIDER);
    this._Tabs._add(this);
  }

  __beforeDestroy() {
    this._Tabs._remove(this);
    this._Tabs = null;
  }
}
