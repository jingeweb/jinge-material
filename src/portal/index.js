import { Component, createFragment, __ } from 'jinge';
import { EnumAttrValidator } from '../_util';

const targetValidator = new EnumAttrValidator('<md-portal>', '__target', ['parent', 'body']);

export class Portal extends Component {
  static get template() {
    return '<_slot/>';
  }

  constructor(attrs) {
    targetValidator.assert(attrs);
    super(attrs);
    this._disabled = attrs.__disabled;
    this._target = attrs.__target || 'body';
    this._removed = false;
    this._savedRootNode = null;
    this._elsToAppend = null;
  }

  get __transitionDOM() {
    if (this._disabled) {
      return super.__transitionDOM;
    } else {
      return this._savedRootNode.__firstDOM;
    }
  }

  __render() {
    const els = super.__render();
    if (this._disabled) {
      return els;
    }
    if (this._target === 'body') {
      document.body.appendChild(els.length > 1 ? createFragment(els) : els[0]);
    } else {
      this._elsToAppend = els;
    }
    this._savedRootNode = this[__].rootNodes[0];
    this[__].rootNodes = [document.createComment('ported')];
    return this[__].rootNodes;
  }

  __handleAfterRender() {
    if (!this._disabled) {
      if (this._target === 'parent') {
        let pa = this.__firstDOM.parentNode;
        if (pa !== document.body) {
          pa = pa.parentNode;
        }
        const els = this._elsToAppend;
        pa.appendChild(els.length > 1 ? createFragment(els) : els[0]);
        this._elsToAppend = null;
      }
      this._savedRootNode.__handleAfterRender();
    }
    super.__handleAfterRender();
  }

  __handleBeforeDestroy(removeDOM = false) {
    if (!this._disabled) {
      this._savedRootNode.__destroy(true);
    }
    super.__handleBeforeDestroy(removeDOM);
  }
}
