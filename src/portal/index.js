import {
  Component,
  RENDER,
  Symbol,
  ROOT_NODES
} from 'jinge';

import {
  appendChild,
  createComment,
  removeChild
} from 'jinge/dom';
import {
  HANDLE_AFTER_RENDER,
  isComponent,
  HANDLE_REMOVE_ROOT_DOMS,
  HANDLE_BEFORE_DESTROY,
  DESTROY
} from 'jinge/core/component';

const DISABLED = Symbol('disabled');
const SAVED_ROOT_NODES = Symbol('saved_doms');

export class Portal extends Component {
  static get template() {
    return '<_slot/>';
  }
  constructor(attrs) {
    super(attrs);
    this[DISABLED] = attrs.__disabled;
    this[SAVED_ROOT_NODES] = null;
  }
  [RENDER]() {
    const els = super[RENDER]();
    if (this[DISABLED]) {
      return els;
    }
    appendChild(document.body, els);
    this[SAVED_ROOT_NODES] = this[ROOT_NODES];
    this[ROOT_NODES] = [createComment('ported')];
    return this[ROOT_NODES];
  }
  [HANDLE_AFTER_RENDER]() {
    if (!this[DISABLED]) this[SAVED_ROOT_NODES].forEach(n => {
      if (isComponent(n)) n[HANDLE_AFTER_RENDER]();
    });
    super[HANDLE_AFTER_RENDER]();
  }
  [HANDLE_REMOVE_ROOT_DOMS]($parent) {
    if (!this[DISABLED]) this[SAVED_ROOT_NODES].forEach(el => {
      if (isComponent(el)) {
        el[HANDLE_REMOVE_ROOT_DOMS](document.body);
      } else {
        removeChild(document.body, el);
      }
    });
    super[HANDLE_REMOVE_ROOT_DOMS]($parent);
  }
  [HANDLE_BEFORE_DESTROY]() {
    if (!this[DISABLED]) this[SAVED_ROOT_NODES].forEach(el => {
      if (isComponent(el)) {
        el[DESTROY](false);
      }
    });
    super[HANDLE_BEFORE_DESTROY]();
  }
}

