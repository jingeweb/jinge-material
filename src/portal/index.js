import {
  Component,
  RENDER,
  Symbol,
  ROOT_NODES
} from 'jinge';

import {
  appendChild,
  createComment
} from 'jinge/dom';
import {
  HANDLE_AFTER_RENDER,
  HANDLE_BEFORE_DESTROY,
  DESTROY,
  GET_FIRST_DOM,
  GET_TRANSITION_DOM
} from 'jinge/core/component';

const DISABLED = Symbol('disabled');
const REMOVED = Symbol('removed');
const SAVED_ROOT_NODE = Symbol('saved');

export class Portal extends Component {
  static get template() {
    return '<_slot/>';
  }
  constructor(attrs) {
    super(attrs);
    this[DISABLED] = attrs.__disabled;
    this[REMOVED] = false;
    this[SAVED_ROOT_NODE] = null;
  }
  [GET_TRANSITION_DOM]() {
    if (this[DISABLED]) {
      return super[GET_TRANSITION_DOM]();
    } else {
      return this[SAVED_ROOT_NODE][GET_FIRST_DOM]();
    }
  }
  [RENDER]() {
    const els = super[RENDER]();
    if (this[DISABLED]) {
      return els;
    }
    appendChild(document.body, els);
    this[SAVED_ROOT_NODE] = this[ROOT_NODES][0];
    this[ROOT_NODES] = [createComment('ported')];
    return this[ROOT_NODES];
  }
  [HANDLE_AFTER_RENDER]() {
    if (!this[DISABLED]) this[SAVED_ROOT_NODE][HANDLE_AFTER_RENDER]();
    super[HANDLE_AFTER_RENDER]();
  }
  [HANDLE_BEFORE_DESTROY]() {
    if (!this[DISABLED]) this[SAVED_ROOT_NODE][DESTROY](true);
    super[HANDLE_BEFORE_DESTROY]();
  }
}

