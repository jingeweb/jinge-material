import {
  Component,
  GET_CONTEXT,
  GET_REF,
  BEFORE_DESTROY,
  RENDER,
  STR_DEFAULT,
  isFunction,
  ARG_COMPONENTS,
  ROOT_NODES
} from 'jinge';
import {
  createElement,
  appendChild
} from 'jinge/dom';
import {
  SELECT_PROVIDER,
  HELPER_MODE
} from './select';
import {
  FIELD_PROVIDER
} from '../field';
import {
  OPTGROUP_PROVIDER
} from './optgroup';

export class Option extends Component {
  static get template() {
    return `
<md-menu-item
  e:class="isSelected ? 'md-selected' : null"
  e:disabled="disabled || (Group && Group.disabled)"
  on:mousedown="onClick"
>
  <if e:expect="Select.multiple">
  <md-checkbox
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
</md-menu-item>`;
  }

  [RENDER]() {
    if (!this._isHelper) {
      return super[RENDER]();
    }
    const el = createElement('span');
    const ac = this[ARG_COMPONENTS];
    if (ac && isFunction(ac[STR_DEFAULT])) {
      this._hasSlot = true;
      appendChild(el, ac[STR_DEFAULT](this));
    }
    this[ROOT_NODES].push(el);
    return this[ROOT_NODES];
  }

  constructor(attrs) {
    super(attrs);
    this.value = attrs.value;
    this.disabled = attrs.disabled;
    this.isSelected = false;

    this._isHelper = this[GET_CONTEXT](HELPER_MODE);
    this._hasSlot = false;

    this._Field = this[GET_CONTEXT](FIELD_PROVIDER);
    this.Select = this[GET_CONTEXT](SELECT_PROVIDER);
    this.Group = this[GET_CONTEXT](OPTGROUP_PROVIDER);
    this.Select._add(this, this._isHelper);
    // don't forget to call parent's _updateFieldClass
    this._Field._updateFieldClass();
  }

  [BEFORE_DESTROY]() {
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
      return this._hasSlot ? this[ROOT_NODES][0].textContent : this.value;
    } else {
      return this[GET_REF]('text').textContent;
    }
  }
}
