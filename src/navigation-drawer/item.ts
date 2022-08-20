import { Attributes, Component } from 'jinge';
import { IconState } from 'jinge-symbols';
import { initState } from '../navigation-rail/util';
import _tpl from './item.html';

export interface NavigationDrawerItemAttrs {
  active?: boolean;
  icon?: Component;
  label: string;
  badge?: number | string;
  to?: unknown;
  href?: string;
  target?: string;
}

export class NavigationDrawerItem extends Component {
  static template = _tpl;

  state: IconState;
  active?: boolean;
  hover?: boolean;
  press?: boolean;

  icon?: Component;
  label: string;
  badge: unknown;
  to?: unknown;
  href?: string;
  target?: string;

  constructor(attrs: Attributes<NavigationDrawerItemAttrs>) {
    super(attrs);
    this.icon = attrs.icon;
    this.label = attrs.label;
    this.badge = attrs.badge;
    this.to = attrs.to;
    this.href = attrs.href;
    this.target = attrs.target;

    this.active = attrs.active;
    initState(this);
  }
  _onActive(isActive: boolean) {
    this.active = isActive;
    this.__notify('active', isActive);
  }
}
