import './bar.scss';

import { Component, vm, isNumber } from 'jinge';
import { EnumAttrValidator } from '../_util';

export const BOTTOM_BAR_PROVIDER = Symbol('bottom_bar_provider');

const typeValidator = new EnumAttrValidator('<md-bottom-bar>', 'type', ['fixed', 'shift']);
export class BottomBar extends Component {
  static get template() {
    return `
<!-- import { Ripple } from '../ripple'; -->
<div class="md-bottom-bar md-type-\${type}\${className ? ' ' + className : ''}">
  <Ripple
    e:disabled="type === 'fixed'"
    e:active="Bar.mouseEvent">
    <_slot />
  </Ripple>
</div>`;
  }

  constructor(attrs) {
    typeValidator.assert(attrs);
    super(attrs);
    this.className = attrs.class;
    this.type = attrs.type || 'fixed';
    this.activeItem = attrs.activeItem;
    this.Bar = vm({
      mouseEvent: null,
      type: this.type,
      _count: 0,
      _items: [],
      _active: this._active.bind(this),
      _register: this._register.bind(this),
    });
    this.__setContext(BOTTOM_BAR_PROVIDER, this.Bar);
  }

  get type() {
    return this._type;
  }

  set type(v) {
    if (this._type === v) return;
    this._type = v;
    this.Bar && (this.Bar.type = v);
  }

  _register(item) {
    if (!item.to) {
      this.Bar._items.push(item); // only store non-ui-sref-item
    }
    this.Bar._count++;
  }

  get activeItem() {
    return this._activeIt;
  }

  set activeItem(v) {
    if (this._activeIt === v) return;
    this._activeIt = v;
    this.Bar && this._active(this._activeIt);
  }

  __afterRender() {
    const its = this.Bar._items;
    if (its.length > 0 && its.length !== this.Bar._count) {
      throw new Error('<md-bottom-bar> can only support neither ui-sref mode or non-ui-sref mode.');
    }
    if (its.length > 0) {
      this._active(this.activeItem);
    }
  }

  _active(idOrIdx) {
    let isIdx = isNumber(idOrIdx);
    if (!isIdx && !idOrIdx) {
      idOrIdx = 0;
      isIdx = true;
    }
    let found = false;
    const its = this.Bar._items;
    if (its.length === 0) {
      return;
    }
    its.forEach((item, idx) => {
      if (found) {
        item.isActive = false;
        return;
      }
      item.isActive = isIdx ? idx === idOrIdx : item.id === idOrIdx;
      if (item.isActive) {
        found = true;
      }
    });
    if (!found) {
      its[0].isActive = true;
    }
  }
}
