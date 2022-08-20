import { Attributes, Component } from 'jinge';
import { IconState } from 'jinge-symbols';

import _tpl from './button.html';

// const IGNORED_EVENTS = ['touchstart', 'mousedown'];

export interface BaseButtonAttrs {
  to?: string;
  target?: '_self' | '_blank';
  href?: string;
  active?: string;
  disabled?: boolean;
  loading?: boolean;
}

export const ContainerTypes: Record<string, string> = {
  filled: 'md-primary',
  'filled-tonal': 'md-secondary-container',
};

export function addIconSetState(comp: Component & { state: IconState }) {
  const $el = comp.__firstDOM as HTMLElement;
  comp.__domAddListener($el, 'mouseenter', () => {
    comp.state = 'hover';
  });
  comp.__domAddListener($el, 'mouseleave', () => (comp.state = 'normal'));
}
export class BaseButton extends Component {
  static template = _tpl;

  state: IconState;
  to?: string;
  target?: string;
  href?: string;
  active?: string;
  disabled: boolean;
  loading: boolean;

  _type: string;
  _tag: 'sref' | 'btn';
  /** container type */
  _ctype: string;
  /** button type */
  _btype: string;

  constructor(attrs: Attributes<BaseButtonAttrs>, buttonType?: 'ic' | 'fa') {
    super(attrs);
    this._tag = attrs.to || attrs.href ? 'sref' : 'btn';
    this.to = attrs.to;
    this.target = attrs.target;
    this.href = attrs.href;
    this.active = attrs.active;
    this.disabled = attrs.disabled;
    this.loading = attrs.loading;
    this._btype = buttonType ? `md-${buttonType}-button` : undefined;
    this.state = 'normal';
  }

  __afterRender() {
    // registerFocus(this);
    // this.__domPassListeners(IGNORED_EVENTS);
    addIconSetState(this);
    this.__domPassListeners();
  }
}
