import './bar.scss';

import { Attributes, Component, uid, vm } from 'jinge';
import { BarWrapper, BOTTOM_BAR_PROVIDER } from './bar';
import _tpl from './item.html';

export interface BottomBarItemAttrs {
  id?: string;
  disabled?: boolean;
  active?: string;
  to?: string;
  target?: string;
  isActive?: boolean;
}
export class BottomBarItem extends Component {
  static template = _tpl;

  id?: string;
  disabled?: boolean;
  active?: string;
  to?: string;
  target?: string;
  isActive?: boolean;
  Bar: BarWrapper;

  constructor(attrs: Attributes<BottomBarItemAttrs>) {
    super(attrs);
    this.id = attrs.id || uid();
    this.disabled = attrs.disabled;
    this.active = 'md-active' + (attrs.active ? ' ' + attrs.active : '');
    this.to = attrs.to;
    this.target = attrs.target;
    this.isActive = false;
    this.Bar = this.__getContext(BOTTOM_BAR_PROVIDER);
  }

  onClick(evt: MouseEvent) {
    if (this.Bar.type === 'shift') {
      this.Bar.mouseEvent = vm({
        _event: evt,
      });
    }
    if (!this.to) {
      this.Bar._active(this.id);
    }
    this.__notify('click', evt);
  }

  __afterRender() {
    this.Bar._register(this);
    this.__domPassListeners(['click']);
  }
}
