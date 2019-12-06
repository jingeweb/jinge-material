import './list-item.scss';

import {
  Component,
  AFTER_RENDER,
  DOM_PASS_LISTENERS,
  NOTIFY,
  LISTENERS,
  GET_FIRST_DOM
} from 'jinge';
import {
  interactionEvents
} from '../_util';

import _tpl from './list-item.html';

function hasInteractionEvents(attrs) {
  const listeners = attrs[LISTENERS];
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
    this.params = attrs.params;
    this.active = attrs.active;
    this.expanded = attrs.expanded;
  }

  notifyExpanded(v) {
    this[NOTIFY]('update.expanded', v);
  }

  [AFTER_RENDER]() {
    if (!this[LISTENERS]) {
      return;
    }
    let el = this[GET_FIRST_DOM]();
    const tag = this._tag;
    if (tag === 'button' || tag === 'sref' || tag === 'link') {
      el = el.children[0];
    }
    console.log('lii', el);
    this[DOM_PASS_LISTENERS](el);
  }
}
