import {
  Component,
  uid,
  GET_CONTEXT,
  BEFORE_DESTROY,
  ARG_COMPONENTS,
  STR_DEFAULT
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
    this.data = attrs.data;
    this.label = attrs.label;
    this.to = attrs.to;
    this.params = attrs.params;
    this.href = attrs.href;
    this.className = attrs.class;
    this.isActive = false;
    this._hasContent = !!(attrs[ARG_COMPONENTS] && attrs[ARG_COMPONENTS][STR_DEFAULT]);
    this._Tabs = this[GET_CONTEXT](TABS_PROVIDER);
    this._Tabs._add(this);
  }

  [BEFORE_DESTROY]() {
    this._Tabs._remove(this);
    this._Tabs = null;
  }
}
