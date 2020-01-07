import './list-item.scss';

import {
  Component, __
} from 'jinge';
import {
  interactionEvents
} from '../_util';

import _tpl from './list-item.html';

function hasInteractionEvents(attrs) {
  const listeners = attrs[__].listeners;
  if (!listeners) return false;
  for (const eventName in listeners) {
    if (interactionEvents.includes(eventName)) {
      return true;
    }
  }
  return false;
}

function getTag(attrs) {
  if (attrs.expand) return 'expand';
  if (attrs.disabled) return 'button';
  if (attrs.to) return 'sref';
  if (attrs.href) return 'link';
  if (hasInteractionEvents(attrs)) return 'button';
  return 'default';
}

export class ListItem extends Component {
  static get template() {
    return _tpl;
  }

  constructor(attrs) {
    super(attrs);
    this._innerClass = 'md-list-item-container md-button-clean';
    this.className = attrs.class;
    this.style = attrs.style;

    this.ripple = attrs.ripple;
    this.disabled = attrs.disabled;

    this._tag = getTag(attrs);
    this.href = attrs.href;
    this.to = attrs.to;
    this.target = attrs.target || '_self';
    this.active = attrs.active;
    this.expanded = attrs.expanded;
  }

  notifyExpanded(v) {
    this.__notify('update.expanded', v);
  }

  __afterRender() {
    let el = this.__firstDOM;
    const tag = this._tag;
    if (tag === 'button' || tag === 'sref' || tag === 'link') {
      el = el.children[0];
    }
    this.__domPassListeners(el);
  }
}
