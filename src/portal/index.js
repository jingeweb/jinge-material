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
import {
  EnumAttrValidator
} from '../_util';

const DISABLED = Symbol('disabled');
const REMOVED = Symbol('removed');
const SAVED_ROOT_NODE = Symbol('saved');
const TARGET = Symbol('target');
const ELS_TO_APPEND = Symbol('elements_to_append');

const targetValidator = new EnumAttrValidator(
  '<md-portal>', '__target', [
    'parent', 'body'
  ]
);

export class Portal extends Component {
  static get template() {
    return '<_slot/>';
  }

  constructor(attrs) {
    targetValidator.assert(attrs);
    super(attrs);
    this[DISABLED] = attrs.__disabled;
    this[TARGET] = attrs.__target || 'body';
    this[REMOVED] = false;
    this[SAVED_ROOT_NODE] = null;
    this[ELS_TO_APPEND] = null;
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
    if (this[TARGET] === 'body') {
      appendChild(document.body, els);
    } else {
      this[ELS_TO_APPEND] = els;
    }
    this[SAVED_ROOT_NODE] = this[ROOT_NODES][0];
    this[ROOT_NODES] = [createComment('ported')];
    return this[ROOT_NODES];
  }

  [HANDLE_AFTER_RENDER]() {
    if (!this[DISABLED]) {
      if (this[TARGET] === 'parent') {
        let pa = this[GET_FIRST_DOM]().parentNode;
        if (pa !== document.body) {
          pa = pa.parentNode;
        }
        appendChild(pa, this[ELS_TO_APPEND]);
        this[ELS_TO_APPEND] = null;
      }
      this[SAVED_ROOT_NODE][HANDLE_AFTER_RENDER]();
    }
    super[HANDLE_AFTER_RENDER]();
  }

  [HANDLE_BEFORE_DESTROY]() {
    if (!this[DISABLED]) {
      this[SAVED_ROOT_NODE][DESTROY](true);
    }
    super[HANDLE_BEFORE_DESTROY]();
  }
}
