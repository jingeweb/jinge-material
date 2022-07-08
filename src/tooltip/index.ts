import { Attributes, Component } from 'jinge';
import { Placement, OptionsGeneric } from '@popperjs/core';
import { PopoverAttrs } from '../popover';
import _tpl from './index.html';

export interface TooltipAttrs {
  title?: string;
  placement?: Placement;
  active?: boolean;
  trigger?: PopoverAttrs['trigger'];
  delay?: number;
  offset?: number;
  closeWhenOutsideClick?: boolean;
  transition?: string;
  _popperOptions?: OptionsGeneric<unknown>;
}
export class Tooltip extends Component {
  static template = _tpl;

  title: string;
  active: boolean;
  placement: Placement;
  trigger: PopoverAttrs['trigger'];
  delay: number;
  offset: number;
  closeWhenOutsideClick: boolean;
  transition?: string;
  _popperOptions?: OptionsGeneric<unknown>;

  constructor(attrs: Attributes<TooltipAttrs>) {
    super(attrs);
    this.title = attrs.title || '';
    this.placement = attrs.placement || 'bottom';
    this.active = attrs.active;
    this.trigger = attrs.trigger || 'hover';
    this.delay = attrs.delay || 150;
    this.offset = attrs.offset || 16;
    this.closeWhenOutsideClick = attrs.closeWhenOutsideClick !== false;
    this.transition = attrs.transition;
    this._popperOptions = attrs._popperOptions;
  }

  onUpdateActive(isActive: boolean) {
    this.__notify('update.active', isActive);
  }
}
