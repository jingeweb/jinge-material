import { Attributes, Component, __ } from 'jinge';
import { interactionEvents } from '../_util';

import _tpl from './list-item.html';

function hasInteractionEvents(attrs: Attributes) {
  const listeners = attrs[__].listeners;
  if (!listeners) return false;
  for (const eventName in listeners) {
    if (interactionEvents.includes(eventName)) {
      return true;
    }
  }
  return false;
}

function getTag(attrs: ListItemAttrs) {
  if (attrs.expand) return 'expand';
  if (attrs.disabled) return 'button';
  if (attrs.to) return 'sref';
  if (attrs.href) return 'link';
  if (hasInteractionEvents(attrs as Attributes)) return 'button';
  return 'default';
}

export interface ListItemAttrs {
  ripple?: boolean;
  disabled?: boolean;
  href?: string;
  to?: string;
  target?: string;
  active?: boolean;
  expand?: boolean;
  expanded?: boolean;
}
export class ListItem extends Component {
  static template = _tpl;

  ripple?: boolean;
  disabled?: boolean;
  href?: string;
  to?: string;
  target?: string;
  active?: boolean;
  expanded?: boolean;
  _tag: ReturnType<typeof getTag>;

  constructor(attrs: Attributes<ListItemAttrs>) {
    super(attrs);

    this.ripple = attrs.ripple;
    this.disabled = attrs.disabled;

    this._tag = getTag(attrs);
    this.href = attrs.href;
    this.to = attrs.to;
    this.target = attrs.target || '_self';
    this.active = attrs.active;
    this.expanded = attrs.expanded;
  }

  notifyExpanded(v: boolean) {
    this.__notify('update.expanded', v);
  }

  __afterRender() {
    let el = this.__firstDOM as HTMLElement;
    const tag = this._tag;
    if (tag === 'button' || tag === 'sref' || tag === 'link') {
      el = el.children[0] as HTMLElement;
    }
    this.__domPassListeners(el);
  }
}
