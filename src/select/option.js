import { Component, isFunction, createElement, __, createFragment } from 'jinge';
import { FIELD_PROVIDER } from '../field';
import { SELECT_PROVIDER, HELPER_MODE } from './select';
import { OPTGROUP_PROVIDER } from './optgroup';

export class Option extends Component {
  static get template() {
    return `
<!--
  import { MenuItem } from '../menu';
  import { Checkbox } from '../checkbox';
-->
<MenuItem
  e:class="isSelected ? 'md-selected' : null"
  e:disabled="disabled || (Group && Group.disabled)"
  on:mousedown="onClick"
>
  <if e:expect="Select.multiple">
  <Checkbox
    on:mousedown="stop"
    e:value="isSelected"
    on:change="onCheck"
    class="md-primary"
    e:disabled="disabled"
  />  
  </if>

  <span class="md-list-item-text" ref:text>
    <_slot>\${value}</_slot>
  </span>
</MenuItem>`;
  }

  __render() {
    if (!this._isHelper) {
      return super.__render();
    }
    const el = createElement('span');
    const ac = this[__].slots;
    if (ac && isFunction(ac.default)) {
      this._hasSlot = true;
      const els = ac.default(this);
      el.appendChild(els.length > 1 ? createFragment(els) : els[0]);
    }
    this[__].rootNodes.push(el);
    return this[__].rootNodes;
  }

  constructor(attrs) {
    super(attrs);
    this.value = attrs.value;
    this.disabled = attrs.disabled;
    this.isSelected = false;

    this._isHelper = this.__getContext(HELPER_MODE);
    this._hasSlot = false;

    this._Field = this.__getContext(FIELD_PROVIDER);
    this.Select = this.__getContext(SELECT_PROVIDER);
    this.Group = this.__getContext(OPTGROUP_PROVIDER);
    this.Select._add(this, this._isHelper);
    // don't forget to call parent's _updateFieldClass
    this._Field._updateFieldClass();
  }

  __beforeDestroy() {
    this.Select._remove(this, this._isHelper);
    this.Select = null;
    this._Field = null;
  }

  onCheck(isChecked) {
    if (this.disabled || (this.Group && this.Group.disabled)) {
      return;
    }
    this.Select._toggleChecked(this, isChecked);
  }

  stop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  onClick(evt) {
    evt.preventDefault(); // prevent input losing focus
    if (this.disabled || (this.Group && this.Group.disabled)) {
      return;
    }
    if (this.Select.multiple) {
      this.Select._toggleChecked(this, !this.isSelected);
    } else {
      this.Select._toggleSelected(this);
    }
  }

  getText() {
    if (this._isHelper) {
      return this._hasSlot ? this[__].rootNodes[0].textContent : this.value;
    } else {
      return this.__getRef('text').textContent;
    }
  }
}
