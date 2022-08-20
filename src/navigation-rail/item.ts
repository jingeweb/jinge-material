import { Attributes, Component } from 'jinge';
import { IconState } from 'jinge-symbols';
import _tpl from './item.html';
import { initState } from './util';

export interface NavigationRailItemAttrs {
  active?: boolean;
  hover?: boolean;
  label?: string;
  icon: Component;
  to?: unknown;
  href?: string;
  target?: string;
}

export class NavigationRailItem extends Component {
  static template = _tpl;

  state: IconState;
  active: boolean;
  hover: boolean;
  press: boolean;

  icon: Component;
  label?: string;
  to?: unknown;
  href?: string;
  target?: string;

  constructor(attrs: Attributes<NavigationRailItemAttrs>) {
    super(attrs);

    this.active = attrs.active;
    this.hover = attrs.hover;

    this.icon = attrs.icon;
    this.label = attrs.label;
    this.to = attrs.to;
    this.href = attrs.href;
    this.target = attrs.target;

    initState(this, 'hover' in attrs);
  }
  _onActive(isActive: boolean) {
    this.active = isActive;
    this.__notify('active', isActive);
  }
  _onClick() {
    this.__notify('click', this);
  }
}
