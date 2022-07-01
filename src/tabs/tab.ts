import { Attributes, Component, uid, __ } from 'jinge';
import { Tabs, TABS_PROVIDER } from './tabs';

import _tpl from './tab.html';

export interface TabAttrs {
  id?: string;
  data?: unknown;
  label?: string;
  to?: unknown;
  href?: string;
  disabled?: boolean;
}

export class Tab extends Component {
  static template = _tpl;

  id: string;
  disabled: boolean;
  data: unknown;
  label: string;
  to: unknown;
  href: string;
  isActive: boolean;
  _hasContent: boolean;
  _Tabs: Tabs;

  constructor(attrs: Attributes<TabAttrs>) {
    super(attrs);
    this.id = attrs.id || `md-tab-${uid()}`;
    this.disabled = attrs.disabled;
    this.data = attrs.data;
    this.label = attrs.label;
    this.to = attrs.to;
    this.href = attrs.href;
    this.isActive = false;
    this._hasContent = !!attrs[__].slots?.default;
    this._Tabs = this.__getContext(TABS_PROVIDER) as Tabs;
    this._Tabs._add(this);
  }

  __beforeDestroy() {
    this._Tabs._remove(this);
    this._Tabs = null;
  }
}
